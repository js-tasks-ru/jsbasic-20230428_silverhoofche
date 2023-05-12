let calculator = {
  firstValue: 0,
  secondValue: 0,

  read(a, b) {
    calculator.firstValue = a;
    calculator.secondValue = b;
  },

  sum() {
    return calculator.firstValue + calculator.secondValue;
  },
  
  mul() {
    return calculator.firstValue * calculator.secondValue;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
