const typeDefs = `
type User {
    _id: ID
    email: String
    password: String
    savedCities: [String]
}

type Auth {
    token: ID
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser(email: String, password: String): Auth
    login(email: String, password: String): Auth
}`;

export default typeDefs;
