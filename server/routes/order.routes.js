const express = require("express");
const {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
} = require("../controllers/order");

const router = express.Router();

router.route("/").get(getOrder).post(postOrder);
router.route("/:id").put(putOrder);
router.route("/:id").delete(deleteOrder);

module.exports = router;
