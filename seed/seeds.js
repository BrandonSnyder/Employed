const seedCompany = require("./company");
const seedProfessionals = require("./professionals");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCompany();
  console.log("\n----- COMPANY SEEDED -----\n");

  await seedProfessionals();
  console.log("\n----- PROFESSIONALS SEEDED -----\n");

  process.exit(0);
};

seedAll();
