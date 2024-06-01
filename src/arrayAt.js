const simplesMock = require('../src/mocks/simple.js');
// Array at
const index = 0
console.info("ARRAY AT ->");
console.log(`An index of ${index} returns ${simplesMock.at(index).value}`);