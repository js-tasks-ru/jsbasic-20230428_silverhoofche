function isEmpty(obj) {
  let result = false;

  if (obj && Object.keys(obj).length === 0) {
    result = true;
  }

  return result;
}
