const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chandrashekharjoshi02:plXjxyNZkVBYFNYx@cluster0.lhux9.mongodb.net/user_management_node_react"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
