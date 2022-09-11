const User = require("./model/user");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GithubStrategy = require("passport-github2").Strategy;

const FacebookStrategy = require("passport-facebook").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "700053057589-6d372oeilhm1vv446p4nh4409tknqtue.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "afa6e59840c404ea179c";

const GITHUB_CLIENT_SECRET = "5ee7ba8a0d50efa8a2a2e30b474e1a95338062f7";

const FACEBOOK_CLIENT_ID = "1108392170110117";

const FACEBOOK_CLIENT_SECRET = "1f9ea24605a809574e6d2284f26d116f";

// Google
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.find({ googleId: profile.id });

      if (user.length === 0) {
        let newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
        });
        await newUser.save();
      }
      done(null, profile);
    }
  )
);

// GitHub
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.find({ googleId: profile.id });
      console.log(user);
      if (user.length === 0) {
        let newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
        });
        await newUser.save();
      }
      done(null, profile);
    }
  )
);

// Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.find({ googleId: profile.id });

      if (user.length === 0) {
        let newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
        });
        await newUser.save();
      }
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
