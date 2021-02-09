$( "form" ).on('submit', function( e ) {
  e.preventDefault();
  var data = $(this).serializeArray()
  var formData = new FormData();
  var imagefile = document.querySelector('#file');

  formData.append("picture", imagefile.files[0]);
  formData.append("name", data[0].value);
  formData.append("weight", data[1].value);
  formData.append("price", data[2].value);

  axios.post("/menu", formData, {headers: {'Content-Type': 'multipart/form-data' }})
    .then(function (response) {
      console.log(response);
      return response
    })
    .then(function () {
      axios.get("/api/menu/search/"+data[0].value)
        .then(function (response) {
            var ul = $("<ul>")
            var name = $("<p>")
            var weight = $("<p>")
            var price = $("<p>")
            var delete_btn = $("<button>")
            var img = $('<img>');
            img.attr('src', "http://localhost:3000/" +response.data.img);
            $(delete_btn).val(response.data._id).attr('id', "delete");
            $("#dish_list").prepend(ul)
            $(ul).append(img);
            $(ul).append(name)
            $(ul).append(weight)
            $(ul).append(price)
            $(ul).append(delete_btn)
            $(name).text("Назва:"+response.data.name)
            $(weight).text("Вага:"+response.data.weight)
            $(price).text("Ціна:"+response.data.price)
            $(delete_btn).text("Delete")
            return
          })
        return
    })
    .catch(function (err) {
      console.log(Object.assign({},err));
    })


})
