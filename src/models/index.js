const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const app = express();

// Create new instance
const sequelize = new Sequelize(
   process.env.db,
   process.env.username,
   process.env.password,
   { host: process.env.host, dialect: process.env.dialect }
);

// Checking connection
sequelize
   .authenticate()
   .then(() => {
      console.log("DB Connected Successfully");
   })
   .catch((e) => {
      console.log("Error: ", +e);
   });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./employee")(sequelize, DataTypes);


module.exports = db;
