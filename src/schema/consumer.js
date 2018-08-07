module.exports = `

    input ConsumerInput {
        name: String!
        msisdn: String!
        address: String!
        region: String!
        franchiseId: String!
        channelType: String!
        bmSerialNum: String!
        siebelUser: String!
        province: String!
        cnic: String!
        city: String!
        nearestLandmark: String!
        mbu: Int!
        latitude: Float!
        longitude: Float!
        location: String!
        createdById: Int!
    }

    type Consumer {
        id: Int!
        name: String!
        msisdn: String!
        address: String!
        region: String!
        franchiseId: String!
        channelType: String!
        bmSerialNum: String!
        siebelUser: String!
        province: String!
        cnic: String!
        city: String!
        nearestLandmark: String!
        mbu: Int!
        latitude: Float!
        longitude: Float!
        location: String!
    }

    type Mutation {
        addConsumer(consumer: ConsumerInput!): Consumer
    }
`;