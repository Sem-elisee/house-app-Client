const express = require("express");
const {
  getCustomer,
  postCustomer,
  putCustomer,
  deleteCustomer,
} = require("../controllers/customer");

const router = express.Router();

router.route("/").get(getCustomer).post(postCustomer);
router.route("/:id").put(putCustomer);
router.route("/:id").delete(deleteCustomer);

module.exports = router;
