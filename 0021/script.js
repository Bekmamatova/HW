let num1 = Number(prompt("Enter 1st number:"));
let num2 = Number(prompt("Enter 2nd number:"));
let num3 = Number(prompt("Enter 3rd number:"));
let num4 = Number(prompt("Enter 4th number:"));
let num5 = Number(prompt("Enter 5th number:"));
let num6 = Number(prompt("Enter 6th number:"));
let num7 = Number(prompt("Enter 7th number:"));

let numArray2 = [];
let numArray3 = [];

if (num1 % 2 === 0) {
    numArray2.push(num1)
};
if (num2 % 2 === 0) {
    numArray2.push(num2)
};
if (num3 % 2 === 0) {
    numArray2.push(num3)
};
if (num4 % 2 === 0) {
    numArray2.push(num4)
};
if (num5 % 2 === 0) {
    numArray2.push(num5)
};
if (num6 % 2 === 0) {
    numArray2.push(num6)
};
if (num7 % 2 === 0) {
    numArray2.push(num7)
};


if (num1 % 3 === 0) {
    numArray3.push(num1)
};
if (num2 % 3 === 0) {
    numArray3.push(num2)
};
if (num3 % 3 === 0) {
    numArray3.push(num3)
};
if (num4 % 3 === 0) {
    numArray3.push(num4)
};
if (num5 % 3 === 0) {
    numArray3.push(num5)
};
if (num6 % 3 === 0) {
    numArray3.push(num6)
};
if (num7 % 3 === 0) {
    numArray3.push(num7)
};

console.log(numArray2); 
console.log(numArray3);