module.exports = `

    type User {
        id: Int!
        email: String!
        firstName: String!
        lastName: String!
        isAdmin: Boolean!
    }

    type AuthUser {
        user: User!
        token: String!
    }

    input UserInput {
        email: String!
        password: String!
        firstName: String!
        lastName: String!
    }

    type Mutation {
        authenticate(email: String!, password: String!): AuthUser
        createUser(user: UserInput!): User
    }
`