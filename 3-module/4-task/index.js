function showSalary(users, age) {

  let filteredList = users.filter(item => item.age <= age).map(function(arr){
    return arr.name + ', ' + arr.balance;
  });

  return filteredList.join('\n');
}
