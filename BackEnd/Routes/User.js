const express = require("express");
const {
  userRegister,
  userLogin,
  userEdit,
  userResetPassword,
  userForgetPassword,
  userCart,
  userOrders,
} = require("../Controllers/Users");
const router = express.Router();

router.use("/register", userRegister);
router.use("/login", userLogin);
router.use("/edit", userEdit);
router.use("/resetpassword", userResetPassword);
router.use("/forgetpassword", userForgetPassword);
router.use("/cart", userCart);
router.use("/orders", userOrders);

module.exports = router;
