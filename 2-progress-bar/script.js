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
    updateDisplay()
})

progressBarPrev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    console.log(currentActive)
    updateDisplay()
})

function updateDisplay() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progressBar.style.width = ((actives.length -1) / (circles.length -1))*100 + '%' 

    if(currentActive === 1){
        progressBarPrev.disabled = true;
    } else if (currentActive === circles.length) {
        progressBarNext.disabled = true;
    } else {
        progressBarPrev.disabled = false
        progressBarNext.disabled = false
    }

}

