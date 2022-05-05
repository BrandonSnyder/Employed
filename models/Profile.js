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
        validate:{
          isURL: true
        }
    },
    github: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isURL: true
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    // `company` column
    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // `profession` column
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // `search` column
    person_or_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // `city` column
    city: {
      type: DataTypes.STRING,
      allowNull: false,
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