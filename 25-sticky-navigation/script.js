const nav = document.querySelector(".nav");

window.addEventListener("scroll", toggleNav);

function toggleNav() {
  console.log(window.scrollY);

  if (window.scrollY > nav.offsetHeight + 300) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
