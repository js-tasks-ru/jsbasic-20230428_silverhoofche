/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null; 
  #arr = '';


  constructor(rows) {
    this.#arr = rows;
    this.elem = this.#render();
  }

  #render() {
    let element = document.createElement('tbody');
    element.innerHTML = this.#template();
    element.addEventListener('click', this.#onCloseClick);
    return element;
  }

  #template() {
    return (
      this.#arr.map(item => {
        return (
          `<tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>
            <td><button data-action='remove'>X</button></td>
          </tr>`);
      }).join('\n')
    );
  }

  #onCloseClick = (event) => {
    if(event.target.dataset.action !== 'remove') {
      return
    }

    let removeButton = event.target;
    removeButton.closest('tr').remove();
  };

}
