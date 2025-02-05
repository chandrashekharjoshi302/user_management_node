require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

app.use("/testing-one", (req, res) => {
  res.send("API is running...");
});

app.use("/chandrashekhar", (req, res) => {
  res.send("API is running in 302...");
});
// Routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/admin", require("./routes/admin"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
