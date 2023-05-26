function makeFriendsList(friends) {

  let ul = document.createElement('ul');

  ul.innerHTML = friends
  .map((arr => '<li>' + arr.firstName + ' ' + arr.lastName + '</li>'))
  .join('\n');

  return ul;
}
