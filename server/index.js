const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const registerRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const passport = require("passport");
const passportSetup = require("./passport-config/passport-setup");
const cookieSession = require("cookie-session");
const localStorage = require("localStorage");
const dashboardRoutes = require("./routes/dashboard");
const connectDB = require("./db");
// const submitRoutes = require("./routes/submit");
const methodOverride = require("method-override");

const { connect } = require("./routes/auth");
const { default: mongoose } = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/kairos")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(methodOverride("_method"));

// connectDB();
app.use(
  cookieSession({
    maxAge: 24 * 3600 * 1000,
    keys: [process.env.encryptionKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// //Register and login Routes
app.use("/auth", registerRoutes);
app.use("/chats", chatRoutes);
app.use("/user", userRoutes);
app.use("/dashboard", dashboardRoutes);
// app.use("/submit", submitRoutes);

app.listen("5000", () => {
  console.log("ON PORT 5000");
});
