const express = require("express");
const router = express.Router();
const {getcontact, createcontact, getonecontact, updatecontact, deletecontact} = require("../controllers/contactController");
const validateToken = require("../middlewares/validatetokenhandler");

router.use(validateToken)
router.route("/").get(getcontact);

router.route("/").post(createcontact);
router.route("/:id").get(getonecontact)

router.route("/:id").put(updatecontact)

router.route("/:id").delete(deletecontact)

module.exports = router;