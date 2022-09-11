// const passport = require("passport");

// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// const User = require("../model/user");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/auth/google/callback",
//       proxy: true,
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.find({ googleId: profile.id }, function (err, user) {
//         if (err) return cb(err, null);

//         // not a user; so create a new user with new google id
//         if (!user) {
//           let newUser = new User({
//             googleId: profile.id,
//             username: profile.displayName,
//           });
//           newUser.save();
//           return cb(null, newUser);
//         } else {
//           // if we find an user just return return user
//           return cb(null, user);
//         }
//       });
//     }
//   )
// );

// // create session id
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // find session info using session id
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, false);
//   }
// });
