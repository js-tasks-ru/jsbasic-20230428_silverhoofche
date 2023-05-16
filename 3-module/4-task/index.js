function showSalary(users, age) {
  let filteredList = users.filter(item => item.age <= age);

  let mappedList = [];
  for(let i = 0; i < filteredList.length; i++) {
    mappedList[i] = filteredList[i].name + ', ' + filteredList[i].balance;
  };

  return mappedList.join('\n');
}
