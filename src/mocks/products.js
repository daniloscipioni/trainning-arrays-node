var produtosMock = [
    {
        id: 101,
        nome: "Produto 1",
        preco: 25.99,
        categoria: "Eletrônicos",
        descricao: "Descrição detalhada do Produto 1",
        avaliacoes: [
            { id: 1, comentario: "Ótimo produto!", nota: 5 },
            { id: 2, comentario: "Poderia ser melhor.", nota: 3 }
        ],
        informacoesAdicionais: {
            peso: "500g",
            dimensoes: "20x10x5cm"
        }
    },
    {
        id: 102,
        nome: "Produto 2",
        preco: 39.99,
        categoria: "Roupas",
        descricao: "Descrição detalhada do Produto 2",
        avaliacoes: [
            { id: 3, comentario: "Excelente qualidade!", nota: 5 },
            { id: 4, comentario: "Tamanho incorreto.", nota: 2 }
        ],
        informacoesAdicionais: {
            tamanho: "M",
            material: "Algodão"
        }
    },
    {
        id: 103,
        nome: "Produto 3",
        preco: 49.99,
        categoria: "Alimentos",
        descricao: "Descrição detalhada do Produto 3",
        avaliacoes: [
            { id: 5, comentario: "Sabor excelente!", nota: 5 },
            { id: 6, comentario: "Data de validade curta.", nota: 3 }
        ],
        informacoesAdicionais: {
            peso: "1kg",
            validade: "10/2024"
        }
    }
    // Adicione mais produtos conforme necessário
];

module.exports = produtosMock