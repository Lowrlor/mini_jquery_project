$(document).on("click", "#new_order", function (e) {
  var order = []
  // console.log($('#baslet_dish_list').find('ul'));
  var list = $('#baslet_dish_list').find('ul').get()
  for (var i = 0; i < list.length; i++) {
    var name = $(list[i]).find( "#dish_name").text().split(":")[1]
    var portion = $(list[i]).find( "#dish_portion").text().split(":")[1]
    order.push({name,portion})
  }
  axios.post("api/order", order)
    .then(function (response) {
    })
    .catch(function (err) {
      console.log(Object.assign({}, err));
    })
})
