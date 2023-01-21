const passport = require("passport");
const pool = require("../db");
const GoogleStrategy = require("passport-google-oauth20");
const { v4: uuid } = require("uuid");
const GoogleUser = require("../models/googleUserModel");
require("dotenv").config();
//grabs some information from the user so that it can be stuffed in a cookie which is sent back to the browser
passport.serializeUser((user, done) => {
  console.log(`I am ${user}`);
  console.log("Cookie sent");
  console.log(user._id);
  done(null, user._id);
});

//When that cookie goes back to the server from the browser, take that id stored in it and find the user based on that id and then attach the user to the 'req' object of the respective path
passport.deserializeUser(async (id, done) => {
  console.log("Inside deserialise");
  console.log(id);
  console.log("Cookie received");
  const user = await GoogleUser.findById(id);
  console.log(user);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      //options for the strategy
      callbackURL: "http://localhost:5000/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //callback that fires at some point during the authentication process
        console.log("INSIDE THE PASSPORT CALLBACK");
        console.log(profile);
        const { id, displayName, emails } = profile;
        console.log(profile);
        const email = emails[0].value;
        console.log(id, displayName, email);
        console.log(typeof id);
        //check whether the user exists
        const user = await GoogleUser.findOne({ email });
        if (!user) {
          //user does not exist
          const newUser = GoogleUser.insertMany([
            {
              username: displayName,
              email,
            },
          ]);
          console.log(newUser);
          console.log("Inserted new user");
          done(null, newUser);
        } else {
          console.log("I exist");
          console.log(user);
          done(null, user);
        }
      } catch (err) {
        console.log("ERRRor");
        console.error(err.message);
      }
    }
  )
);

module.exports = passport;
