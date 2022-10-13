const opener = document.getElementById('open');
const closener = document.getElementById('close');
const container = document.querySelector('.container');

opener.addEventListener('click', () => container.classList.add('show-nav'));

closener.addEventListener('click', () => container.classList.remove('show-nav'));
