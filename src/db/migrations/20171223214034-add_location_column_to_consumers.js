'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'consumers',
        'location',
        {
          type: Sequelize.STRING,
          allowedNull: false
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
