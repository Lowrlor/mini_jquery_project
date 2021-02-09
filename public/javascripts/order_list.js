axios.get("http://localhost:3000/api/order/")
  .then(function (response) {
    return response.data
  })
  .then(function (response) {
    var data = response
    console.log(data);
    for (var k = 0; k < data.length; k++) {
      console.log(data[k]);
      var list = $("<ul class=order>").css( "padding-inline-start", "0")
      for (var i = 0; i < data[k].order.length; i++) {
        datas = data[k].order
        var name = $("<p>")
        var portion = $("<p>")
        var order = $("<ul>").css( "padding-inline-start", "0")
        $("#order_list").append(list)
        $(list).append(order)
        $(order).append(name)
        $(order).append(portion)
        $(name).text("Назва:"+datas[i].name)
        $(portion).text("Порції:"+datas[i].portion)
      }
    }
  })
  .catch(function (err) {
    console.log(Object.assign({}, err));
    console.log(err);
  })
