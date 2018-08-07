'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'consumers',
        'emailed',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
