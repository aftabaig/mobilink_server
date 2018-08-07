'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consumers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      msisdn: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      region: {
        allowNull: false,
        type: Sequelize.STRING
      },
      franchiseId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      channelType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bmSerialNum: {
        allowNull: false,
        type: Sequelize.STRING
      },
      siebelUser: {
        allowNull: false,
        type: Sequelize.STRING
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cnic: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nearestLandmark: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mbu: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      createdById: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          "model": "users",
          "key": "id"
        },
        referenceKey: "id"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('consumers');
  }
};
