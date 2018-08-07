const Province = require("../db/models").province;

module.exports = {
    listProvinces
}

function listProvinces(request, response) {
    Province.findAll().then(provinces => {
        response.json(provinces);
    }).catch(error => {
        response.status(500).send(error)
    })
}