'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'cities',
        'provinceId',
        {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            "model": "provinces",
            "key": "id"
          },
          referenceKey: "id"
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
