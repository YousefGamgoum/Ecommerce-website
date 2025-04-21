// Require Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Database Connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {})
  .catch(() => {});

// Create express instance
const app = express();

// Standerd middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("./Static"));

// Routes
app.use("");
app.use("");
app.use("");

// NotFound Middleware
app.use(function (req, res, next) {});

// Error MiddleWare
app.use((err, req, res, next) => {});

// Start Listening
const port = process.env.PORT;
app.listen(port, () => {});
