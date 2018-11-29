const mathNode = require("./math-module.js");

let sumIt = mathNode.sum;
let multiplyIt = mathNode.multiply;
let divideIt = mathNode.divide;
let squareIt = mathNode.square;

console.log(sumIt(2, 78));
console.log(multiplyIt(3, 9));
console.log(divideIt(4, 67));
console.log(squareIt(45));

const stringNode = require("./strings-module.js");

let reverseIt = stringNode.reverseString;
let lastCharIt = stringNode.lastChar;
let camelCaseIt = stringNode.camelCase;

console.log(reverseIt("cat"));
console.log(lastCharIt("Hello There!"));
console.log(camelCaseIt("here we go"));
