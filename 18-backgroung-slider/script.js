const body = document.body
const container = document.querySelector('slider-container')
const slides = document.querySelectorAll('slide')

const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')

// slides position
let activeSlide = 0

setBgToBody();

function setBgToBody () {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
