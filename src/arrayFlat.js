// Une array internos em um unico array
const simplesMock = require('../src/mocks/simple.js');
console.log(simplesMock);
console.log(simplesMock.flat());
const arr1 = [1, 2, [3, 4, [5, 6, [[1, 4, 5, 9, 9]], 8, [{ 1: 2 }, 10]]]];

console.log(arr1.flat(2));
console.log(arr1.flat(2));