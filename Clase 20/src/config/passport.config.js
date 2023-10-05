import passport from 'passport';
import local from 'passport-local';
import { userModel } from '../models/user.model.js';
import bcrypt from 'bcrypt';

const LocalStrategy = local.Strategy;
const initializePassport = () => {
  passport.use(
    'register',
    new LocalStrategy(
      { passReqToCallback: true, usernameField: 'email' },
      async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;
        const userExists = await userModel.findOne({ email });

        if (userExists) {
          return done(null, false);
        }

        const user = await userModel.create({
          first_name,
          last_name,
          email,
          age,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        });

        return done(null, user);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
  });

  passport.use(
    'login',
    new LocalStrategy(
      { usernameField: 'email' },
      async (username, password, done) => {
        try {
          const user = await userModel.findOne({ email: username }).lean();
          if (!user) {
            return done(null, false);
          }

          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

export default initializePassport;
