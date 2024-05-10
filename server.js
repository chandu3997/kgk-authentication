const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const { sequelize } = require("./models/User");

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 4444;

// Connect to the database and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("Database connected successfully");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
