function highlight(table) {
  let rows = table.rows;
  
  for(let i = 1; i < rows.length; i++) {
    let rowItem = rows[i].cells;
    
    if(Number(rowItem[1].textContent) < 18 ) {
      rows[i].style.textDecoration = 'line-through';
    };
    
    if(rowItem[2].textContent === 'm') {
      rows[i].classList.add('male');
    } else if(rowItem[2].textContent === 'f') {
      rows[i].classList.add('female');
    };
  
    if (rowItem[3].dataset.available === 'true') {
      rows[i].classList.add('available');
    } else if (rowItem[3].dataset.available === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute("hidden", '');
    }
  };

}
