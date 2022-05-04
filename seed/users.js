const { User } = require("../models");

const usersData = [
  {
    first_name: "Tim",
    last_name: "Cook",
    email: "TimmyCoo@apple.com",
    password: "IheartApple1",
    
  },
  {
    first_name: "Doug",
    last_name: "McMillon",
    email: "DougMcMillion@walmart.com",
    password: "IheartWalmart1",
    
  },
  {
    first_name: "Darren",
    last_name: "Woods",
    email: "DarrenWoods@exxon.com",
    password: "IheartExxon1",
    
  },
  {
    first_name: "John",
    last_name: "Hammergren",
    email: "johnnyBOI@mckesson.com",
    password: "JboI1233",
    
  },
  {
    first_name: "Jeff",
    last_name: "Bezos",
    email: "JeffB@amazon.com",
    password: "Jbamazon1233",
    
  },
  {
    first_name: "Sundar",
    last_name: "Pichai",
    email: "SundarP@amazon.com",
    password: "Googleis1",
  },
  {
    first_name: "Brandon",
    last_name: "Snyder",
    email: "brandon.snyder019@gmail.com",
    password: "root123",
    
  },
  {
    first_name: "Carrington",
    last_name: "Edmondson",
    email: "mcarringtone@gmail.com",
    password: "root123",
  },
  {
    first_name: "James",
    last_name: "Edwards",
    email: "edwards.econn@gmail.com",
    password: "root123",
  },
  {
    first_name: "Eric",
    last_name: "Hurst",
    email: "Ericahurst77@gmail.com",
    password: "root123",
    profession: "Full Stack Developer",
    person_or_company: "person",
    city: "Suwanee",
  },
  {
    first_name: "Richard",
    last_name: "Hendricks",
    email: "EricH@piedpiper.com",
    password: "root123",
  },
  {
    first_name: "Gilfoyle",
    last_name: "Starr",
    email: "TheRealG@piedpiper.com",
    password: "root123",
  },
  {
    first_name: "Dinesh",
    last_name: "Nanjiani",
    email: "MrStealYourGirl@piedpiper.com",
    password: "root123",
  },
];
const seedUser = () => User.bulkCreate(usersData);

module.exports = seedUser;
