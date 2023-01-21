const express = require("express");
const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const { validInfo, validateEmail } = require("../middleware/validInfo");
const { application } = require("express");
const authorise = require("../middleware/authorisation");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");

router.use(express.json());

router.post("/register", validInfo, async (req, res) => {
  try {
    //1. DESTRUCTURE THE REQ.BODY (username, email, password)
    const {
      username,
      email,
      password,
      registrationId,
      role,
      education,
      fieldOfInterest,
    } = req.body;
    console.log(
      username,
      password,
      email,
      registrationId,
      role,
      education,
      fieldOfInterest
    );

    console.log("About to check if the user is present");
    const newUser = await User.findOne({ username });
    console.log("User does not exist");

    // 2. CHECK IF THE USER EXISTS
    if (newUser) {
      console.log("HI!!");
      return res.status(401).send("User already exists");
    } else {
      //3. BCRYPT THE USER PASSWORD
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log("hashed password", hashedPassword);

      //4. INSERT THE NEW USER INSIDE THE DATABASE
      console.log("Inserting into database");
      const newUser = await User.insertMany({
        username,
        email,
        password:hashedPassword,
        registrationId,
        fieldOfInterest,
        role,
        education,
      })
      console.log("Printing the new User");
      console.log(newUser);
      console.log("Inserted");
      //5. GENERATING OUR JWT TOKEN
      console.log(newUser);
      const token = jwtGenerator(newUser._id);
      return res.json(token);
    }
  } catch (err) {
    console.log(err);
    console.error("SERVER ERROR");
    res.status(500).send(err.message);
  }
});

router.post("/login", validInfo, async (req, res) => {
  try {
    //1. DESTRUCTURE FROM REQ.BODY
    console.log("Inside login");
    const { username, password } = req.body;
    console.log(username, password);
    const foundUser = await User.findOne({ username });

    //2. CHECK IF THE USER EXISTS
    if (!foundUser) {
      //3. THROW ERROR IF THE USER DOES NOT EXIST
      return res.status(401).json("INVALID CREDENTIALS");
    } else {
      console.log("foundUser is ");
      console.log(foundUser);
      //4. CHECK IF THE PASSWORD ENTERED IS RIGHT
      const validPassword = await bcrypt.compare(
        password,
        foundUser.password
      );
      //5. GENERATE A TOKEN IF THE PASSWORD ENTERED IS RIGHT
      if (validPassword) {
        const token = jwtGenerator(foundUser._id);
        console.log("SUCCESS!!!");
        return res.json({ token });
      }
      throw new Error("INVALID CREDENTIALS");
    }
  } catch (err) {
    res.status(500).send("SERVER ERROR");
    console.error(err);
  }
});

//We have generated a jwt token and have sent it to the client side and so everytime they make a fetch or access request to get access to a private area they are going to have to show that token to us and now we need to create a middleware that will check whether or not the token that is given to us is valid

router.get("/is-verify", authorise, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
  }
});

//GOOGLE ROUTES

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  const token = jwtGenerator(req.user.id);
  res.cookie("token", token);
  res.redirect("http://localhost:3000/dashboard");
});

module.exports = router;
