const arrows = document.querySelectorAll(".share_icon")
const icons = document.querySelector(".social_media")

for (flecha of arrows) {
    flecha.addEventListener("click", function () {
        icons.classList.toggle("show")
    })
}
