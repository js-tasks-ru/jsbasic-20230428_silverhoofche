function sumSalary(salaries) {
  let totalSumm = 0;
  
  for(let key in salaries) {
    if (isFinite(salaries[key])) {
      totalSumm += salaries[key];
    }
  }

  return totalSumm;
}
