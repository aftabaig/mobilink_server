const City = require("../db/models").city;
const Province = require("../db/models").province;
module.exports = {
    listCities
}

function listCities(request, response) {
    let provinceId = request.params.provinceId;
    Province.findOne({
        where: {
            id: provinceId
        },
        include: [
            'cities'
        ]
    }).then(province => {
        if (province == null) {
            response.status(404).send();
        }
        else {
            response.json(province.cities);
        }
    }).catch(error => {
        response.status(500).send(error)
    })
}