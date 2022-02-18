const backgrounds = [
    "bg1.jpg",
    "bg2.jpeg",
    "bg3.jpg"
]

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]

const bgImage = document.createElement("img");

console.log(bgImage)

bgImage.src = `img/${randomBg}`

document.body.appendChild(bgImage)