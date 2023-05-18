function getMinMax(str) {
  let arr = str.split(' ').filter(item => isFinite(item)).sort((a, b) => a - b);

  return {min: Number(arr[0]), max: Number(arr[arr.length - 1])};
}
