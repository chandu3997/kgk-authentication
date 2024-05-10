const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

// Create Sequelize instance with SQLite database file path
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../db/database.db"),
});

// Define User model schema
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  
}, {
    timestamps: false 
});

// Export the Sequelize instance and User model
module.exports = { sequelize, User };
