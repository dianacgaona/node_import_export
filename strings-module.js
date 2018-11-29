function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function lastChar(str) {
  return str.slice(-1);
}

function camelCase(str) {
  let strArr = str.split("");
  let output = [];
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2) {
      output.push(strArr[i].toUpperCase());
    } else {
      output.push(strArr[i].toLowerCase());
    }
  }

  newStr = output.join("");
  return newStr;
}

module.exports.reverseString = reverseString;
module.exports.lastChar = lastChar;
module.exports.camelCase = camelCase;
