const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("nav-links")
const navItems = document.querySelectorAll("#nav-links a")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
  })
})
