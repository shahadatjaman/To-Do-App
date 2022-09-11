// let User = require("./model/user");
// let JwtStrategy = require("passport-jwt").Strategy;
// let ExtractJwt = require("passport-jwt").ExtractJwt;
// let opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = "SECRET";
// opts.issuer = "accounts.examplesoft.com";
// opts.audience = "yoursite.net";

// module.exports = (passport) => {
//   passport.use(
//     new JwtStrategy(opts, async (payload, done) => {
//       console.log(payload);
//       let user = await User.findById(payload._id);

//       if (!user) {
//         return done(null, false);
//       }
//       return done(null, user);
//     })
//   );
// };

const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("./model/user");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = "SECRET";

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      User.findOne({ _id: payload._id })
        .then((user) => {
          if (!user) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((error) => {
          console.log(error);
          return done(error);
        });
    })
  );
};
