// Require Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productsRoutes = require("./Routes/Products");
const userRoutes = require("./Routes/User");

const port = process.env.PORT;

//Database Connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database Connected");
    // Start Listening
    app.listen(port, () => {});
  })
  .catch((err) => {});

// Create express instance
const app = express();

// Standerd middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("./Static"));

// Routes
app.use("/products", productsRoutes);
// view all -- all users
// view one -- all users
// create -- registered sellers
// edit -- seller who own product
// delete -- seller who own product
app.use("/user", userRoutes);
// register
// login
// reset password --registered user
// forget password -- registered user
// cart -- user who own the cart
// orders -- registered user

// NotFound Middleware
app.use(function (req, res, next) {
  next(new AppError(404, "Route Not Found"));
});

// Error MiddleWare
app.use((err, req, res, next) => {
  let message;
  let statusCode;

  // Mongoose CastError
  if (err.name === "CastError") {
    message = `Invalid ${err.path}: ${err.value}`;
    statusCode = 400;
  }
  // Mongoose duplicate key error
  else if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate value for field: ${field}`;
    statusCode = 400;
  }

  // Mongoose ValidationError
  else if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    message = `Validation failed: ${errors.join(", ")}`;
    statusCode = 400;
  }

  // JWT Error
  else if (err.name === "JsonWebTokenError") {
    message = "Invalid token. Please log in again.";
    statusCode = 401;
  }

  // JWT expired
  else if (err.name === "TokenExpiredError") {
    message = "Your token has expired. Please log in again.";
    statusCode = 401;
  }

  //  Other Error
  else {
    message = err.message || "Try again later";
    statusCode = err.statusCode || 500;
  }

  res.status(statusCode).json({
    status: "Fail",
    message,
  });
});
