const { Model, DataTypes } = require("sequelize");
// Require bcrypt
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// User class extends Parent Model
class User extends Model {
  // Bcrypt
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// User table
User.init(
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
    modelName: "user",
  }
);

// Exporting User to index.js
module.exports = User;
