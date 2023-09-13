const secret = document.querySelector(".secret-image")
const body = document.body
window.onscroll = function() {myFunction()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

secret.addEventListener("click", () => {
    
    secret.classList.toggle("open")


})