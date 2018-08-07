'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUnique: function (value, next) {
            var self = this;
            User.find({
                where: {
                    email: value
                }
            })
            .then(function(user) {
                if (user && self.id !== user.id) {
                    return next('This email is already taken.');
                }
                return next();
            })
            .catch(function (err) {
                return next(err);
            });
        }
    }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  User.associate = (models) => {
    User.hasMany(models.consumer, {
      foreignKey: 'id',
      as: 'consumers'
    });
  }
  User.emailCount = function(email) {
    return User.count({
      where: {
        email: email
      }
    })
  }
  User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }
  User.prototype.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }
  User.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
  }
  return User;
};