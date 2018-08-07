'use strict';
module.exports = (sequelize, DataTypes) => {
  var Province = sequelize.define('province', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Province.associate = (models) => {
    Province.hasMany(models.city, {
      foreignKey: 'provinceId',
      as: 'cities'
    });
  }
  return Province;
};