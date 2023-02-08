const express = require("express");
const dotenv = require("dotenv");

// initialize configuration
const app = express();
dotenv.config();

const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(
  process.env.PORT || 5000,
  () => NODE_ENV === "development" && console.log("Server started on port 5000")
);
