/**
* export default [
*  {
*    name: 'Penang shrimp',
*    price: 16,
*    image: 'penang_shrimp.png',
*    id: 'penang-shrimp'
*  },
*];
*
*/

import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null; 
  slides = '';
  arrowPrev = null;
  arrowNext = null;
  carousel__inner = null;
  slidesItems = 0;
  slidesPos = 0;
  currentPosition = 0;
  itemWidth = 0;

  constructor(slides) {
    this.slides = slides;
    this.elem = this.#render();
  }

  #render() {
    const element = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
    
        <div class="carousel__inner">
          ${
            this.slides.map(item => {
              return (`
                <div class="carousel__slide" data-id="penang-shrimp">
                  <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
                  <div class="carousel__caption">
                    <span class="carousel__price">€${item.price.toFixed(2)}</span>
                    <div class="carousel__title">${item.name}</div>
                    <button type="button" class="carousel__button" data-action='add'>
                      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                  </div>
                </div>
              `);
            }).join('\n')
          }
        </div>
      </div>
    `);

    this.arrowPrev = element.querySelector('.carousel__arrow_left');
    this.arrowNext = element.querySelector('.carousel__arrow_right');
    this.carousel__inner = element.querySelector('.carousel__inner');
    this.slidesItems = element.querySelectorAll('.carousel__slide');

    this.arrowPrev.style.display = 'none';
    
    element.addEventListener('click', this.#onClick);

    return element;
  }

  #onClick = (event) => {
    this.itemWidth = this.slidesItems[0].offsetWidth;
    const target = event.target;

    const prevSlide = () => {
      this.carousel__inner.style.transform = `translateX(${this.currentPosition + this.itemWidth}px)`;
      this.currentPosition += this.itemWidth;
      this.slidesPos = this.slidesPos - 1;
      if(this.currentPosition == 0) {
        this.arrowPrev.style.display = 'none';
      };
      this.arrowNext.style.display = '';
    };

    const nextSlide = () => {
      this.carousel__inner.style.transform = `translateX(${this.currentPosition - this.itemWidth}px)`;
      this.currentPosition = this.currentPosition - this.itemWidth;
      this.slidesPos += 1;
      if(this.currentPosition == -this.itemWidth * (this.slidesItems.length - 1)) {
        this.arrowNext.style.display = 'none';
      };
      this.arrowPrev.style.display = '';
    };

    if (target.closest('.carousel__arrow_right')) { nextSlide(); }
    if (target.closest('.carousel__arrow_left')) { prevSlide(); }


    if (target.closest('.carousel__button')) {

      const clickEvent = new CustomEvent('product-add', {
        bubbles: true,
        detail: this.slides[this.slidesPos].id,
      });

      this.elem.dispatchEvent(clickEvent);
    }
  }
}
