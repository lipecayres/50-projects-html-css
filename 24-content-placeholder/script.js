const animated_bg = document.querySelectorAll(".animated-bg");

setTimeout(() => {
    const loaders = document.querySelectorAll('.animated-bg');
    const loadersText = document.querySelectorAll(".animated-bg-text");
    loaders.forEach(loader => {
        loader.classList.remove('animated-bg');
    });
    loadersText.forEach(loader => {
        loader.classList.remove('animated-bg-text');
    });
}, 1000); // 2 seconds
