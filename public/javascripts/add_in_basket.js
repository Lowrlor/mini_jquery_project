$(document).on('click', '#add', function(e){
  var number_of_portion = $(this).parent().find(':selected').attr('value')
  axios.get("api/menu/search-by-id/"+this.value)
    .then(function (response) {
      return response.data
    })
    .then(function (response) {
      var data = response
      var ul = $("<ul>")
      var name = $("<p id=dish_name>")
      var weight = $("<p>")
      var price = $("<p>")
      var portion = $("<p id=dish_portion>")
      var delete_btn = $("<button id=dlt_from_basket>")
      var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
      img.attr('src', "http://localhost:3000/" +data.img);
      $("#baslet_dish_list").prepend(ul)
      $(ul).append(img);
      $(ul).append(name)
      $(ul).append(weight)
      $(ul).append(price)
      $(ul).append(portion)
      $(ul).append(delete_btn)
      data.price = parseInt(data.price) * number_of_portion
      data.weight = parseInt(data.weight) * number_of_portion
      $(name).text("Назва:"+data.name)
      $(price).text("Ціна:"+data.price)
      $(weight).text("Вага:"+data.weight)
      $(portion).text("Порції:"+ number_of_portion ).css("display", "contents")
      $(delete_btn).text("Видалити").css({
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-top": "1em"
      })
    })
});
