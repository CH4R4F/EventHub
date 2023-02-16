const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./models");

// initialize configuration
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// database connection
db.sequelize
  .sync({ alter: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(
  process.env.PORT || 5000,
  () => NODE_ENV === "development" && console.log("Server started on port 5000")
);
