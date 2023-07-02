const ham = document.querySelector(".hidden");
const burger = document.querySelector(".button-menu");
const closeIcon = document.querySelector(".close");

burger.addEventListener('click', () => {
  if (ham.classList.contains('hidden')) {
    ham.classList.remove('hidden');
  }
});

closeIcon.addEventListener('click', () => {
  ham.classList.add('hidden');
});

    