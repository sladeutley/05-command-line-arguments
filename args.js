#!/usr/local/bin/node
'use strict';

const [,, num1] = process.argv;
const [,,, num2] = process.argv;

console.log('num1',num1);
console.log('num2',num2);

const sum = +num1 + +num2;
console.log('sum',sum);

const [ ,, ...numbers ] = process.argv;
console.log('numbers',numbers);

let sumOfNumbers;
// sumOfNumbers = numbers.map(number => +number.reduce((number1,number2) => (number1 + number2)));
sumOfNumbers = numbers.map(number => +number);

console.log('sumOfNumbers',sumOfNumbers);
// numbers.map((number) => +(number));
// console.log('numbers',numbers);
// console.log('args',args);
// const sumUp = numbers.reduce((+a,+b) => {
//     console.log('sumUp', +a + +b;
// });
// let sumUp = numbers;
// console.log('sumUP',sumUP);