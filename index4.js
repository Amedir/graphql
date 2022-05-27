const { gql, ApolloServer } = require("apollo-server")

const produtos = [
    {
        id: 1,
        nome: 'PC',
        valor: 5000.90
    },
    {
        id: 2,
        nome: 'Carro',
        valor: 15000
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Ademir',
        salario: 1220.50,
        ativo: true,
        idade: 19
    },
    {
        id: 2,
        nome: 'Carol',
        salario: 5020.50,
        ativo: true,
        idade: 25
    }
]

const typeDefs = gql`
    type Produto {
        id: ID,
        nome: String,
        valor: Float
    }

    type Usuario {
        nome: String
        idade: Int,
        salario: Float,
        ativo: Boolean,
        id: ID,
    }
    
    type Query {
        usuarios: [Usuario],
        produtos: [Produto]
    }
`;

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },
        produtos(){
            return produtos;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()