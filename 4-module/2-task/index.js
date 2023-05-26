function makeDiagonalRed(table) {
  let rows = Array.from(table.querySelectorAll('tr'));
  let arr = [];
      
  rows.forEach(e => {
    arr.push(Array.from(e.querySelectorAll('td')));
  });

  for(let i = 0; i < arr.length; i++) {
    arr[i][i].style.backgroundColor = 'red';
  };

  return arr;
}
