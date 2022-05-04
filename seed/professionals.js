const { Professionals } = require("../models");
const bcrypt = require("bcrypt");

const professionalsData = [
  {
    first_name: "Brandon",
    last_name: "Snyder",
    email: "brandon.snyder019@gmail.com",
    password: "root123",
    city: "atlanta",
    profession: "Full Stack Developer",
    github: "https://github.com/BrandonSnyder",
    linked_in: "https://linkedin.com/in/brandonlsnyder",
  },
  {
    first_name: "Carrington",
    last_name: "Edmondson",
    email: "mcarringtone@gmail.com",
    password: "root123",
    city: "atlanta",
    profession: "Full Stack Developer",
    github: "https://github.com/BrandonSnyder",
    linked_in: "https://linkedin.com/in/brandonlsnyder",
  },
  {
    first_name: "James",
    last_name: "Edwards",
    email: "edwards.econn@gmail.com",
    password: "root123",
    city: "atlanta",
    profession: "Full Stack Developer",
    github: "https://github.com/BrandonSnyder",
    linked_in: "https://linkedin.com/in/brandonlsnyder",
  },
  {
    first_name: "Eric",
    last_name: "Hurst",
    email: "Ericahurst77@gmail.com",
    password: "root123",
    profession: "Full Stack Developer",
    city: "Suwanee",
    github: "https://github.com/BrandonSnyder",
    linked_in: "https://linkedin.com/in/brandonlsnyder",
  },
  // {
  //   first_name: "Richard",
  //   last_name: "Hendricks",
  //   email: "EricH@piedpiper.com",
  //   password: "root123",
  // },
  // {
  //   first_name: "Gilfoyle",
  //   last_name: "Starr",
  //   email: "TheRealG@piedpiper.com",
  //   password: "root123",
  // },
  // {
  //   first_name: "Dinesh",
  //   last_name: "Nanjiani",
  //   email: "MrStealYourGirl@piedpiper.com",
  //   password: "root123",
  // },
];
professionalsData.forEach(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

const seedProfessionals = () => Professionals.bulkCreate(professionalsData);

module.exports = seedProfessionals;
