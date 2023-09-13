const secret = document.querySelector(".secret-image")
const body = document.body
const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop;
const scrollBtn = document.getElementById("scrollToTopBtn")

window.onscroll = () => {stickyNavbar(); scrollToTop();}

const stickyNavbar = () => {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

secret.addEventListener("click", () => {
    secret.classList.toggle("open")
})

const scrollToTop = () => {
    if (body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        scrollBtn.style.display = "block"
    } else {
        scrollBtn.style.display = "none"
    }
}

const topFunction = () => {
    body.scrollTop = 0
    document.documentElement.scrollTop = 0  
}