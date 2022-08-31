const bcrypt = require('bcrypt');
const passport = require('passport');
const { create } = require('tar');
const User = require('../models/User');
const ExtractJWT = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;

require('../models');
require('../repositories/usersRepository');
const { findById } = require('../repositories/usersRepository');

const jwtOPtion = {
  //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
  secretOrKey: 'TOP_SECRET'
};

passport.use(new JwtStrategy(jwtOPtion, ( async (token, done) => {

  const user = findById(token._id);  
  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }

} )));

/*
passport.use('singup', new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async ( email, password, done ) => {
    const user = create({ email, password });
  }
));
*/

passport.use('login', new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    User.findOne({ where: { email: email }}, (err, user) => {
      if (err) { return done(err); }
      if(!user) return done(null, false, {message: 'User not found'});
      if (!bcrypt.compareSync(password, user.password)) { return done(null, false, { message: 'Wrong Password' }); };
      return done(null, user);
    }) 
      
  }
));