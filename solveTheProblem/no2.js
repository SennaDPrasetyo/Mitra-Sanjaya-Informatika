function countLetter(str) {
  let counter = 0;
  let temp = "";

  str.split("").forEach((element) => {
    if (str.split(element).length > counter) {
      counter = str.split(element).length;
      temp = element;
    }
  });
  return temp;
}

console.log(countLetter("ABCC"));
console.log(countLetter("DCABA"));
console.log(countLetter("EBC"));
console.log(countLetter("F"));
