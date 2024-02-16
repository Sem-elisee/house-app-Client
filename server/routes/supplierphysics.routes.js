const express = require("express");
const {
  getSupplierPhysics,
  postSupplierPhysics,
  putsupplierphysics,
  deletesupplierphysics,
} = require("../controllers/supplierPhysics");

const router = express.Router();

router.route("/").get(getSupplierPhysics).post(postSupplierPhysics);
router.route("/:id").put(putsupplierphysics);
router.route("/:id").delete(deletesupplierphysics);

module.exports = router;
