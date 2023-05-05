function factorial(n) {
  let factorialTotalValue = 1;

  for(let i = 1; i <= n; i++) {
    factorialTotalValue *= i;
  };

  return factorialTotalValue;
};