
const heartIcons = document.getElementsByClassName("heart-icon-count")

const heartCountElement = document.getElementById("heartCount")

let heartCount = parseInt(heartCountElement.innerText)

for (let icon of heartIcons) {
    icon.addEventListener("click", function () { 
        heartCount++
        heartCountElement.innerText = heartCount
    })
}