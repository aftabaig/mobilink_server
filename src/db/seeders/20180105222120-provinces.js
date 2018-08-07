'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('provinces', [
      { name: 'Punjab', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { name: 'Sindh', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') }, 
      { name: 'Balochistan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { name: 'Khyber Pakhtunkhwa', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('provinces', null, {});
  }
};
