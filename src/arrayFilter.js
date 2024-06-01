const clientesMock = require('../src/mocks/customers.js');

// Array Filter
const result = clientesMock.filter((clientesMock) => clientesMock.idade >= 30)

console.log(result);
