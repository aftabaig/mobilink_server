module.exports = {
    Query: {
        provinces: async(parent, context, { models }) => {
            const provinces = models.province.findAll({
                order: [
                    ['name', 'ASC']
                ]
            });
            return provinces;
        },
        cities: async(parent, { provinceId }, { models }) => {
            const cities = models.city.findAll({
                where: {
                    provinceId: provinceId
                },
                order: [
                    ['name', 'ASC']
                ]
            });
            return cities;
        }
    }
}