const router = require("express").Router();
const ctrl = require("../controllers/boardController");
const mid = require("../middleware/auth");

// 조회(Get 요청).
router.get("/", ctrl.list);

router.get("/:id", ctrl.detail);

// CRUD
router.post("/", mid.verifyToken, ctrl.insert);

router.delete("/:id", mid.verifyToken, ctrl.remove);

module.exports = router;
