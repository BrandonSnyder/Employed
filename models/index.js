// Importing User and Profile together
const User = require('./User');
const Profile = require('./Profile');

// User only has ONE Profile
User.hasOne(Profile, {
    foreignKey: 'user_id',
})

// Said Profile BELONGS TO said USer
Profile.belongsTo(User, {
    foreignKey: 'user_id',
})

// Exporting User and Profile
module.exports = { User, Profile };