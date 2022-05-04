const { Company } = require("../models");
const bcrypt = require("bcrypt");

const companyData = [
  {
    company: "Apple",
    email: "apple@gmail.com",
    city: "cupertino",
    password: "root12346",
    user_id: 1,
  },
  {
    company: "google",
    email: "google@apple.com",
    city: "atlanta",
    password: "root123461",
    user_id: 2,
  },
  {
    company: "IBM",
    email: "apple1@gmail.com",
    city: "austin",
    password: "root123462",
    user_id: 3,
  },
];

companyData.forEach( async (user)=> {
  user.password = await bcrypt.hash(user.password, 10)        
})

const seedCompany = () => Company.bulkCreate(companyData);

module.exports = seedCompany;
