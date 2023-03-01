const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



function N(){

}
function uno() {
    document.getElementById('texto').innerHTML = "Hi, My name is";
    document.getElementById('texto1').innerHTML = "Henry Hicks" ;
}

document.getElementById('1').onmouseover = function () {
    document.getElementById('texto').innerHTML = "Hi, My name is";
    document.getElementById('texto1').innerHTML = "Henry Hicks";
}

document.getElementById('2').onmouseover = function () {
    document.getElementById('texto').innerHTML = "My email address is"
    document.getElementById('texto1').innerHTML = "henry.hicks@example.com"
}

document.getElementById('3').onmouseover = function () {
    document.getElementById('texto').innerHTML = "My birthdayt is"
    document.getElementById('texto1').innerHTML = "03/07/1961"
}

document.getElementById('4').onmouseover = function() {
    document.getElementById('texto').innerHTML = "My address is"
    document.getElementById('texto1').innerHTML = "289 Cackson St"
}

document.getElementById('5').onmouseover = function () {
    document.getElementById('texto').innerHTML = "My phone number is"
    document.getElementById('texto1').innerHTML = "(598) 317-9141"
}

document.getElementById('6').onmouseover = function () {
    document.getElementById('texto').innerHTML = "My password is"
    document.getElementById('texto1').innerHTML = "louise"
}