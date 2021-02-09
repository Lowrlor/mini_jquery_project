axios.get('/api/menu')
  .then(function (response) {
    return response.data
  })
  .then(function (response) {
    for (var i = 0; i < response.length; i++) {
      var list = $("<ul>")
      var img = $('<img>')
      var name = $("<p>")
      var weight = $("<p>")
      var price = $("<p>")
      var btn_delete = $("<button id=delete>")
      console.log(response[i].img);
      $("#dish_list").append(list)
      $(list).append(img)
      $(list).append(name)
      $(list).append(weight)
      $(list).append(price)
      $(list).append(btn_delete)
      img.attr('src', "http://localhost:3000/"+response[i].img);
      $(name).text("Назва:"+response[i].name)
      $(weight).text("Вага:"+response[i].weight)
      $(price).text("Ціна:"+response[i].price)
      $(btn_delete).text("Видалити")
      $(btn_delete).val(response[i]._id)
    }
  })
  .catch(function (err) {
    console.log(Object.assign({},err));
  })
