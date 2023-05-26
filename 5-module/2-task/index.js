function toggleText() {
  let buttonToToggle = document.querySelector('.toggle-text-button');
  let textToToggle = document.querySelector('#text');

  buttonToToggle.addEventListener('click', () => {
    textToToggle.toggleAttribute("hidden");
  });
}
