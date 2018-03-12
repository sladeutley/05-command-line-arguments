#!/usr/local/bin/node
'use strict';

const [,, num1] = process.argv;
const [,,, num2] = process.argv;

const sum = +num1 + +num2;
console.log('sum',sum);

const [ ,, ...numbers ] = process.argv;

// version 1
let sumOfNumbers = numbers.length > 0 ? numbers.map(number => +number).reduce((number1,number2) => (number1 + number2)) : 0;

// version 2
// let sumOfNumbers = 0;
// numbers.length > 0 ? sumOfNumbers = numbers.map(number => +number).reduce((number1,number2) => (number1 + number2)) : 0;

// // version 3
// let sumOfNumbers; 
// numbers.length > 0 ? sumOfNumbers = numbers.map(number => +number).reduce((number1,number2) => (number1 + number2)) : sumOfNumbers = 0;

console.log('sumOfNumbers',sumOfNumbers);
