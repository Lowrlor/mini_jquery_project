axios.get('/api/menu')
  .then(function (response) {
    return response.data
  })
  .then(function (response) {
    for (var i = 0; i < response.length; i++) {
      var list = $("<ul>")
      var img = $('<img>')
      var name = $("<p>")
      var weight = $("<p id=weight>")
      var price = $("<p id=price>")
      var add = $("<button id=add>")
      var select = $("<select id=select>")
      $("#dish_list").append(list)
      $(list).append(img)
      $(list).append(name)
      $(list).append(weight)
      $(list).append(price)
      $(list).append(add)
      $(list).append(select)
      img.attr('src', "http://localhost:3000/"+response[i].img);
      $(name).text("Назва:"+response[i].name)
      $(weight).text("Вага:"+response[i].weight)
      $(price).text("Ціна:"+response[i].price)
      $(add).text("Добавити")
      $(add).val(response[i]._id)
      for (var j = 1; j < 11; j++) {
        $(select).append($('<option>').val(j).text(j))
      }
    }
  })
  .catch(function (err) {
    console.log(Object.assign({},err));
  })
