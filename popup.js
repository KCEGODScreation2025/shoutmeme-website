const popup = document.getElementById("popup")
const closeBtn = document.getElementById("closePopup")

// Show the popup with a delay after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    popup.style.display = "flex"
  }, 2000) // Delay in milliseconds (e.g. 2000 = 2 seconds)
})

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
  popup.style.display = "none"
})

// Close popup if user clicks outside the content
window.addEventListener("click", e => {
  if (e.target === popup) {
    popup.style.display = "none"
  }
})
