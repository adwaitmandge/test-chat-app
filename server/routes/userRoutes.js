const User = require("../models/userModel");

const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("Inside fetch users");
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { username: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const users = await User.find(keyword);
    res.send(users);
  } catch (error) {
    console.log("Error occurred while fetching chats");
    console.log(error);
  }
});

module.exports = router;
