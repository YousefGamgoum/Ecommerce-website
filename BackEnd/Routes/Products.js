const express = require("express");
const {
  productsView,
  productView,
  productEdit,
  productDelete,
  productCreate,
} = require("../Controllers/Products");
const router = express.Router();

router.use("/", productsView);
router.use("/:id", productView);
router.use("/:id/edit", productEdit);
router.use("/:id/delete", productDelete);
router.use("/:id/create", productCreate);

module.exports = router;
