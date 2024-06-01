const simplesMock = require('../src/mocks/simple.js');
console.info("array original", simplesMock);
// Array copyWithIn
console.info("copyWithIn", simplesMock.copyWithin(3, 1, 4));