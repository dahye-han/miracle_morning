const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try{
            await User.findOne({ where: {id}})
        } catch (error) {
            console.eerror(error);
            done(error);
        }
    });

    local();
}