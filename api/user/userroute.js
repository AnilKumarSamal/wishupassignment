const { getUser, createUser } = require("./usercontroller");

const router = require("express").Router();

router.put("/:username", createUser);
router.get("/:username", getUser);

module.exports = router;
