var button = document.querySelector(".button");
var count = document.querySelector(".count");

function isActive() {
  button.classList.toggle("is-active");
  setTimeout(function () {
    button.classList.remove("is-active");
  }, 1000);

  let currentCount = parseInt(count.textContent, 10);
  count.textContent = currentCount + 1;
}

button.addEventListener("click", isActive);
