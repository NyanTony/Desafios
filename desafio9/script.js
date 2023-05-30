var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonText = this.innerHTML;
    alert("Você clicou no botão: " + buttonText);
  });
}
