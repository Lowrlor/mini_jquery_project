$(document).on('change', '#select', function (e) {
  var _id = $("#add").val()
  var portion = this.value
  axios.get("api/menu/search-by-id/"+_id)
    .then(function (response) {
      var price = parseInt(response.data.price) * portion
      var weight = parseInt(response.data.weight) * portion
      $("#price").text("Ціна:"+price)
      $("#weight").text("Вага:"+weight)
    })
})
