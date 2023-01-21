const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://127.0.0.1:27017/kairos',
      {
        useNewURLParser: true,
        useUnifiedTopology: true,
      },
      );
      console.log(`MongoDB cxxonnected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

module.exports = connectDB;
