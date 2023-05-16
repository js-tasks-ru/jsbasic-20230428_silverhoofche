function camelize(str) {
  if(str === '') {
    return str;
  };

  let fromStrToArr = str.split('-');
  for (let i = 1; i < fromStrToArr.length; i++) {
    fromStrToArr[i] = fromStrToArr[i][0].toUpperCase() + fromStrToArr[i].slice(1)
  };

  return fromStrToArr.join('');
}
