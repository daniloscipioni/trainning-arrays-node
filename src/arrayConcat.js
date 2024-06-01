const clientesMock = require('../src/mocks/customers.js');
const simplesMock = require('../src/mocks/simple.js');
// Array concat
const consumerProductsArray = clientesMock.concat(simplesMock)
console.info("ARRAY CONCAT ->", consumerProductsArray);