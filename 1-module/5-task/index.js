function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let lengthAfterSlising = maxlength - 1;
    str = str.slice(0, lengthAfterSlising) + '…';
  }

  return str;
}
