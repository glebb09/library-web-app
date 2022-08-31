const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;

const { User } = require('../models');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:  process.env.JWT_SECRET,
  passReqToCallback: true,
};

passport.use(new JwtStrategy(jwtOptions, (async (req, payload, done) => {
  try {
    const user = await User.findByPk(payload.id);
    if (user) {
      req.user = user;
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
})));

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
},
(async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, user);
  } catch (error) {
    done(error);
  }
})));

module.exports.isAuthenticated = async (req, res, next) => {
  try {
    await passport.authenticate('jwt', (err, user) => {
      if (err) {
        res.status(400).json({ errors: [err] });
      }
      if (user) {
        next();
      } else {
        throw 'Access denied';
      }
    })(req, res, next);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};