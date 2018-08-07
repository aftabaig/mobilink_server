const Consumer = require("../db/models").consumer;

module.exports = {
    addConsumer
}

function addConsumer(request, response) {
    let consumer = request.body.consumer || {};
    consumer.createdById = request.user.id;
    Consumer.create(consumer)
    .then(consumer => 
        response.json(consumer)
    )
    .catch(error => 
        response.status(400).json(error.errors[0])
    )
}