const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match:  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 8,
      maxLength: 20,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    dob: {
      type: Date,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let salt = await bcryptjs.genSalt(10);
  let hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;

  next();
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
