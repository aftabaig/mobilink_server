'use strict';

module.exports = (sequelize, DataTypes) => {
  var Consumer = sequelize.define('consumer', {
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    msisdn: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    region: {
        allowNull: false,
        type: DataTypes.STRING
    },
    franchiseId: {
        allowNull: false,
        type: DataTypes.STRING
    },
    channelType: {
        allowNull: false,
        type: DataTypes.STRING
    },
    bmSerialNum: {
        allowNull: false,
        type: DataTypes.STRING
    },
    siebelUser: {
        allowNull: false,
        type: DataTypes.STRING
    },
    province: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['Punjab', 'Sindh', 'KPK', 'Baluchistan']
    },
    cnic: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isUnique: function (value, next) {
                var self = this;
                Consumer.find({
                    where: {
                        cnic: value
                    }
                })
                .then(function(consumer) {
                    if (consumer && self.id !== consumer.id) {
                        return next('The CNIC cannot be duplicated.');
                    }
                    return next();
                })
                .catch(function (err) {
                    return next(err);
                });
            }
        }
    },
    city: {
        allowNull: false,
        type: DataTypes.STRING
    },
    nearestLandmark: {
        allowNull: false,
        type: DataTypes.STRING
    },
    mbu: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    latitude: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    longitude: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    location: {
        allowNull: false,
        type: DataTypes.STRING
    },
    emailed: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    }
  });
  Consumer.associate = (models) => {
    Consumer.belongsTo(models.user, {
      foreignKey: 'createdById',
      as: 'createdBy'
    });
  }
  return Consumer;
};