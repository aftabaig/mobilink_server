'use strict';

module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('city', {
    name: DataTypes.STRING
  });
  City.associate = (models) => {
    City.belongsTo(models.province, {
      foreignKey: 'provinceId',
      as: 'province'
    });
  }
  return City;
};