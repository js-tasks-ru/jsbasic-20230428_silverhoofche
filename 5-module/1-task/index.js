function hideSelf() {
  let buttonToHide = document.querySelector('.hide-self-button');

  buttonToHide.addEventListener('click', () => {
    buttonToHide.setAttribute("hidden", '');
  }, {once: true});
}
