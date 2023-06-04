/**
 * let card = new ProductCard({
 *    name: "Laab kai chicken salad",
 *    price: 10,
 *    category: "salads",
 *    image: "laab_kai_chicken_salad.png",
 *    id: "laab-kai-chicken-salad"
 *  });
 *
 */

import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = null; 
  #obj = '';

  constructor(product) {
    this.#obj = product;
    this.elem = this.#render();
  }

  #render() { 
    const element = createElement(
      `<div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.#obj.image}" class="card__image" alt="product">
          <span class="card__price">€${this.#obj.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.#obj.name}</div>
          <button type="button" class="card__button" data-action='add'>
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);

    element.addEventListener('click', this.#onClickPlus);

    return element;
  }

  #onClickPlus = (event) => {
    if(event.target.dataset.action !== 'add') {
      return
    }

    let addButton = event.target;
    addButton.closest('.card');

    const cardAddEvent = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.#obj.id,
    });

    this.elem.dispatchEvent(cardAddEvent);
  }
}