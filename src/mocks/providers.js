var fornecedoresMock = [
    {
        id: 1,
        nome: "Fornecedor A",
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "São Paulo",
            estado: "SP",
            cep: "12345-678"
        },
        contato: {
            nome: "João",
            email: "joao@example.com",
            telefone: "(11) 1234-5678"
        },
        produtos: [
            {
                id: 101,
                nome: "Produto 1",
                preco: 25.99,
                categoria: "Eletrônicos",
                descricao: "Descrição do Produto 1",
                avaliacoes: [
                    { id: 1, comentario: "Ótimo produto!", nota: 5 },
                    { id: 2, comentario: "Poderia ser melhor.", nota: 3 }
                ]
            },
            {
                id: 102,
                nome: "Produto 2",
                preco: 39.99,
                categoria: "Roupas",
                descricao: "Descrição do Produto 2",
                avaliacoes: [
                    { id: 3, comentario: "Excelente qualidade!", nota: 5 },
                    { id: 4, comentario: "Tamanho incorreto.", nota: 2 }
                ]
            }
        ],
        informacoesAdicionais: {
            horarioFuncionamento: "Segunda a sexta, das 8h às 18h",
            descricao: "Fornecedor de produtos de alta qualidade"
        }
    },
    {
        id: 2,
        nome: "Fornecedor B",
        endereco: {
            rua: "Avenida Central",
            numero: 456,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            cep: "98765-432"
        },
        contato: {
            nome: "Maria",
            email: "maria@example.com",
            telefone: "(21) 9876-5432"
        },
        produtos: [
            {
                id: 201,
                nome: "Produto 3",
                preco: 49.99,
                categoria: "Alimentos",
                descricao: "Descrição do Produto 3",
                avaliacoes: [
                    { id: 5, comentario: "Sabor excelente!", nota: 5 },
                    { id: 6, comentario: "Data de validade curta.", nota: 3 }
                ]
            },
            {
                id: 202,
                nome: "Produto 4",
                preco: 59.99,
                categoria: "Eletrônicos",
                descricao: "Descrição do Produto 4",
                avaliacoes: [
                    { id: 7, comentario: "Funciona perfeitamente.", nota: 4 },
                    { id: 8, comentario: "Fragilidade na embalagem.", nota: 3 }
                ]
            }
        ],
        informacoesAdicionais: {
            horarioFuncionamento: "Segunda a sábado, das 9h às 20h",
            descricao: "Especializado em produtos importados"
        }
    }
    // Adicione mais fornecedores conforme necessário
];
module.exports = fornecedoresMock;