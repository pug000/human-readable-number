module.exports = function toReadable(number) {
  let arrOne = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
  let arrTen = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let numberString = number.toString();
  if (number === 0) {
    return "zero";
  };
  if (number < 20) {
    return arrOne[number];
  };
  if (numberString.length === 2) {
    if (numberString[1] === "0") {
      return arrTen[numberString[0]];
    } else
      return arrTen[numberString[0]] + " " + arrOne[numberString[1]];
  };
  if (numberString.length === 3) {
    if (numberString[1] === "0" && numberString[2] === "0") {
      return arrOne[numberString[0]] + " hundred";
    };
    if (numberString[1] === "0") {
      return arrOne[numberString[0]] + " hundred " + arrOne[numberString[2]];
    };
    if (numberString[1] === "1") {
      return arrOne[numberString[0]] + " hundred " + arrOne.slice(10)[numberString[2]];
    };
    if (numberString[2] === "0") {
      return arrOne[numberString[0]] + " hundred " + arrTen[numberString[1]];
    } else
      return arrOne[numberString[0]] + " hundred " + arrTen[numberString[1]] + " " + arrOne[numberString[2]];
  };
};