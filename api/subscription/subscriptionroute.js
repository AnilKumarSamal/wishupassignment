const {
  createSubscription,
  getSubscriptions,
} = require("./subscriptioncontroller");

const router = require("express").Router();

router.post("/", createSubscription);
router.get("/:username/:date?", getSubscriptions);

module.exports = router;
