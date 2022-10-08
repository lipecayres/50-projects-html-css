const progressBar = document.getElementById('progress')
const progressBarPrev = document.getElementById('prev')
const progressBarNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

progressBarNext.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    console.log(currentActive)
})

progressBarPrev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    console.log(currentActive)
})