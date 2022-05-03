const {Profile} = require('../models')
const profData = [
    {
        "linked_in": "https://www.linkedin.com/in/brandonlsnyder/",
        "github": "https://github.com/BrandonSnyder",
        "user_id": 1
    },
    {
        "linked_in": "https://www.linkedin.com/in/brandonlsnyder/",
        "github": "https://github.com/BrandonSnyder",
        "user_id": 2
    },
    {
        "linked_in": "https://www.linkedin.com/in/brandonlsnyder/",
        "github": "https://github.com/BrandonSnyder",
        "user_id":  3
    },
    {
        "linked_in": "https://www.linkedin.com/in/brandonlsnyder/",
        "github": "https://github.com/BrandonSnyder",
        "user_id": 4
    }
]
const seedProfiles = () => Profile.bulkCreate(profData);

module.exports = seedProfiles;

