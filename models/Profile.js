const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Profile class extends Parent Model
class Profile extends Model {}

// Profile table
Profile.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    linked_in: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    github: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

// Exporting Profile to index.js
module.exports = Profile;