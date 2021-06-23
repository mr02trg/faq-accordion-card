const accordionEl = document.querySelectorAll(".accordion");

const toggle = function() {
  this.classList.toggle("active");
}

accordionEl.forEach(el => el.addEventListener('click', toggle))