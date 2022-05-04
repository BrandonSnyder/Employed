const seedUser = require("./users");
const seedProfessionals = require("./professionals");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  
  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedProfessionals();
  console.log("\n----- PROFESIONALS SEEDED -----\n");

  process.exit(0);
};

seedAll();
