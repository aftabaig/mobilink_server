module.exports = `

    type Province {
        id: Int!
        name: String!
        cities: [City]
    }

    type City {
        id: Int!
        name: String!
    }

    type Query {
        cities(provinceId: Int!): [City]
        provinces: [Province]
    }
`;