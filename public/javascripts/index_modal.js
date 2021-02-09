// Get the modal
var menu_modal = document.getElementById("Menu_modal");
var basket_modal = document.getElementById("Basket_modal");

// Get the button that opens the modal
var btn_menu = document.getElementById("myBtn");
var btn_order = document.getElementById("myBtn1");
var btn = document.getElementById("btn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")

// When the user clicks on the button, open the modal
btn_menu.onclick = function() {
  menu_modal.style.display = "block";

}
btn_order.onclick = function() {
  basket_modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  menu_modal.style.display = "none";
}
span[1].onclick = function() {
  basket_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == menu_modal) {
    menu_modal.style.display = "none";
  }
  if (event.target == basket_modal) {
    basket_modal.style.display = "none";
  }
}
