function checkSpam(str) {
  let lowerStr = str.toLowerCase()
  let spam1 = "1xbet";
  let spam2 = "xxx";

  if (lowerStr.includes(spam1) || lowerStr.includes(spam2)) {
    return true;
  } else {
    return false;
  }
}