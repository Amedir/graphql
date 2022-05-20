const { gql, ApolloServer } = require("apollo-server")

const typeDefs = gql`
    type Query {
        nome: String
        idade: Int,
        salario: Float,
        ativo: Boolean,
        id: ID,
        tecnologias: [String!]!
    }
`

const resolvers = {
    Query: {
        nome() {
            return 'ademir';
        },
        idade() {
            return 13;
        },
        salario() {
            return 1300.50;
        },
        ativo() {
            return true;
        },
        id(){
            return 1;
        },
        tecnologias() {
            return ['Python', 'Java', 'CSS'];
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()