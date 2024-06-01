var clientesMock = [
    {
        id: 1,
        nome: "João",
        sobrenome: "Silva",
        idade: 30,
        email: "joao@example.com",
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "São Paulo",
            estado: "SP",
            cep: "12345-678"
        },
        pedidos: [
            {
                id: 101,
                data: "2024-05-01",
                total: 60.97,
                itens: [
                    {
                        produto: {
                            id: 1,
                            nome: "Camiseta",
                            preco: 25.99,
                            categoria: "Vestuário"
                        },
                        quantidade: 2
                    },
                    {
                        produto: {
                            id: 2,
                            nome: "Calça Jeans",
                            preco: 59.99,
                            categoria: "Vestuário"
                        },
                        quantidade: 1
                    }
                ]
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nota: 4,
                comentario: "Produto de boa qualidade."
            },
            {
                id: 2,
                nota: 5,
                comentario: "Entrega rápida e eficiente."
            }
        ],
        informacoesPagamento: {
            tipoCartao: "Visa",
            numeroCartao: "**** **** **** 1234",
            validade: "10/26"
        },
        historicoCompras: [
            {
                idPedido: 101,
                data: "2024-05-01",
                total: 60.97
            }
        ]
    },
    {
        id: 2,
        nome: "Maria",
        sobrenome: "Santos",
        idade: 25,
        email: "maria@example.com",
        endereco: {
            rua: "Avenida Central",
            numero: 456,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            cep: "98765-432"
        },
        pedidos: [
            {
                id: 201,
                data: "2024-05-02",
                total: 99.99,
                itens: [
                    {
                        produto: {
                            id: 3,
                            nome: "Tênis",
                            preco: 99.99,
                            categoria: "Calçados"
                        },
                        quantidade: 1
                    }
                ]
            }
        ],
        avaliacoes: [
            {
                id: 3,
                nota: 5,
                comentario: "Produto excelente, recomendo!"
            }
        ],
        informacoesPagamento: {
            tipoCartao: "MasterCard",
            numeroCartao: "**** **** **** 5678",
            validade: "12/27"
        },
        historicoCompras: [
            {
                idPedido: 201,
                data: "2024-05-02",
                total: 99.99
            }
        ]
    },
    {
        id: 3,
        nome: "Maria",
        sobrenome: "Santos",
        idade: 35,
        email: "maria@example.com",
        endereco: {
            rua: "Avenida Central",
            numero: 456,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            cep: "98765-432"
        },
        pedidos: [
            {
                id: 201,
                data: "2024-05-02",
                total: 50.00,
                itens: [
                    {
                        produto: {
                            id: 3,
                            nome: "Tênis",
                            preco: 50.00,
                            categoria: "Calçados"
                        },
                        quantidade: 1
                    }
                ]
            }
        ],
        avaliacoes: [
            {
                id: 3,
                nota: 5,
                comentario: "Produto excelente, recomendo!"
            }
        ],
        informacoesPagamento: {
            tipoCartao: "MasterCard",
            numeroCartao: "**** **** **** 5678",
            validade: "12/27"
        },
        historicoCompras: [
            {
                idPedido: 201,
                data: "2024-05-02",
                total: 99.99
            }
        ]
    }
]

module.exports = clientesMock;