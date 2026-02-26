const router = require("express").Router();
const ctrl = require("../controllers/authController");

// CRUD
router.post("/", ctrl.signUp);
router.post("/login", ctrl.login);

module.exports = router;
