function filterRange(arr, a, b) {
  return arr.filter(item => a <= item).filter(item => item <= b);
}