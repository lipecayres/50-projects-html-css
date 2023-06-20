const body = document.body
const container = document.querySelector('.slider-container')
const slides = document.querySelectorAll('.slide')

const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')

// slides position
let activeSlide =0

btnRight.addEventListener('click', () => {
    activeSlide++

    if(activeSlide >slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

btnLeft.addEventListener('click', () => {
    activeSlide--

    if(activeSlide <0) {
        activeSlide = slides.length -1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()


function setBgToBody () {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}

function leftClick () {
    if (activeSlide < 0) {
        activeSlide = 4
    } 
    activeSlide--
}

