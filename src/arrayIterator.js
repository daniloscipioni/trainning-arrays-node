// Array iterator
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
const array = oneMoreProduct
const iterator = array[Symbol.iterator]();
for (const value of iterator) {
    value.preco = value.preco * 2
    console.info("ARRAY ITERATOR ->", value);
}
