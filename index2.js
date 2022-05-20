const { gql, ApolloServer } = require("apollo-server")

const typeDefs = gql`
    type Query {
        nome: String
        idade: Int,
        salario: Float,
        ativo: Boolean,
        id: ID
    }
`

const resolvers = {
    Query: {
        nome() {
            return 'ademir';
        },
        idade() {
            return 13;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()