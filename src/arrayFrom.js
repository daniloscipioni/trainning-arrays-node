const produtosMock = require('../src/mocks/products.js');
const clientesMock = require('../src/mocks/customers.js');
const fornecedoresMock = require('../src/mocks/providers.js');

const oneMoreProduct = [{
    id: 104,
    nome: "Produto 4",
    preco: 50,
    categoria: "Bebidas",
    descricao: "Descrição detalhada do Produto 4",
    avaliacoes: [
        { id: 5, comentario: "Sabor excelente!", nota: 5 },
        { id: 6, comentario: "Data de validade curta.", nota: 3 }
    ],
    informacoesAdicionais: {
        peso: "1Lt",
        validade: "10/2024"
    }
}, {
    id: 105,
    nome: "Produto 4",
    preco: 60,
    categoria: "Bebidas",
    descricao: "Descrição detalhada do Produto 5",
    avaliacoes: [
        { id: 5, comentario: "Sabor excelente!", nota: 5 },
        { id: 6, comentario: "Data de validade curta.", nota: 3 }
    ],
    informacoesAdicionais: {
        peso: "1Lt",
        validade: "10/2024"
    }
}];
produtosMock.push(oneMoreProduct)

function addValueToPrice(object, value) {
    x = object
    x.preco = object.preco * value
    return x

}
// Array From
const ArrayUnion = new Array(clientesMock, fornecedoresMock, produtosMock)
const add2xtoPrice = Array.from(oneMoreProduct, (x) => addValueToPrice(x, 3))
console.info("ARRAY FROM ->", add2xtoPrice);

console.info("IS ARRAY ->", Array.isArray(add2xtoPrice));