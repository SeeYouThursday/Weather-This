const typeDefs = `
type User {
    _id: ID
    email: String
    password: String
    savedCities: [String] # //??Should the array here use a schema to store extra data i.e. lat/long
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
