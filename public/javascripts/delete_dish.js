$(document).on('click', '#delete', function(e){
  axios.delete("/api/menu/remove/" + this.value)
    .then(function (response) {
    })
  $( this ).parent().remove()
})
