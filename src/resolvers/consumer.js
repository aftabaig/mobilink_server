const { isAuthenticated, isAdmin } = require('../auth');

module.exports = {
    Mutation: {
        addConsumer: async(parent, { consumer }, { models, request }) => {
            isAuthenticated(request);
            return await models.consumer.create(consumer);
        }
    }
}