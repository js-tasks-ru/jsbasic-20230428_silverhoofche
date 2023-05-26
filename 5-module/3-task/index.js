function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let carousel__inner = carousel.querySelector('.carousel__inner');
  
  let items = carousel.querySelectorAll('.carousel__slide');
  let itemWidth = items[1].offsetWidth;
  let currentPosition = 0;

  let buttonPrev = carousel.querySelector('.carousel__arrow_left');
  let buttonNext = carousel.querySelector('.carousel__arrow_right');
  
  buttonPrev.style.display = 'none';

  buttonPrev.addEventListener('click', () => {
    carousel__inner.style.transform = `translateX(${currentPosition + itemWidth}px)`;
    currentPosition += itemWidth;
    if(currentPosition == 0) {
      buttonPrev.style.display = 'none';
    };
    buttonNext.style.display = '';
  });

  buttonNext.addEventListener('click', () => {
    carousel__inner.style.transform = `translateX(${currentPosition - itemWidth}px)`;
    currentPosition = currentPosition - itemWidth;
    if(currentPosition == -itemWidth * (items.length - 1)) {
      buttonNext.style.display = 'none';
    };
    buttonPrev.style.display = '';
  });
}
