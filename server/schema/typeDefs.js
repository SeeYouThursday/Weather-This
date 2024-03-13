const typeDefs = `
type User {
    _id: ID
    email: String
    user_id: String!
    savedCities: [String] 
}

type Auth {
    token: ID
    user: [User]
}

type Query {
    me: User
    users: User
}

type Mutation {
    addUser(email: String, user_id: String): User
    saveCity(city: String): User
}`;

export default typeDefs;
