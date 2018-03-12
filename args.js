#!/usr/local/bin/node
'use strict';

const [,, num1] = process.argv;
const [,,, num2] = process.argv;

console.log('num1',num1);
console.log('num2',num2);

const sum = +num1 + +num2;
console.log('sum',sum);

// const [ ,, ...args ] = process.argv;
// console.log('args',args);
// const sumUp = args.reduce(a,b => {
//     console.log('sumUp', a + b);
// });