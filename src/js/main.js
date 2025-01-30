var button = document.querySelector(".button");

function isActive() {
  button.classList.toggle("is-active");
}
button.addEventListener("click", isActive);
