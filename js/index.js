const btnClose = document.querySelector("#btn-close")
const btnOpen = document.querySelector("#btn-open")
const divOverlay = document.querySelector("#overlay")

btnOpen.addEventListener("click", function() {
    divOverlay.style.display = "block"
})

btnClose.addEventListener("click", function() {
    divOverlay.style.display = "none"
})