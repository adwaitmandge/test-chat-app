const express = require("express");
const router = express.Router();
const authorise = require("../middleware/authorisation");
const GoogleUser = require("../models/googleUserModel");
const User = require("../models/userModel");


router.get("/", authorise, async (req, res) => {
  try {
    //AFTER PASSING THE MIDDLEWARE, REQ.USER HAS THE PAYLOAD
    console.log("inside dashboard route");
    console.log(req.user);
    const user = await User.findOne({_id:req.user});
    console.log("user", user);
    // const user = await pool.query("SELECT * FROM users WHERE id = $1", [
    //   req.user,
    // ]);

    if (!user) {
      console.log(req.user);
      const user = await GoogleUser.findOne({_id:req.user});
      // const user = await pool.query("SELECT * FROM google WHERE id=$1", [
      //   req.user,
      // ]);
      res.json(user);
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err.message);
    res.status(403).json("NOT AUTHORISED");
  }
});

module.exports= router;
