const { Model, DataTypes } = require("sequelize");
// Require bcrypt
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// User class extends Parent Model
class Professionals extends Model {
  // Bcrypt
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// User table
Professionals.init(
  // 1st Obj
  {
    // `id` column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // `first_name` column
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // Will ONLY allow letters
      validate: {
        isAlpha: true,
        max: 25,
      },
    },
    // `last_name` column
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // Will ONLY allow letters
      validate: {
        isAlpha: true,
        max: 25,
      },
    },
    // `email` column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // Will ONLY allow letters
      validate: {
        isEmail: true,
      },
    },
    // `password` column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 16],
        isAlphanumeric: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    linked_in: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
  },
  // 2nd Obj
  {
    // Password Encryption
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "professionals",
  }
);

// Exporting User to index.js
module.exports = Professionals;
