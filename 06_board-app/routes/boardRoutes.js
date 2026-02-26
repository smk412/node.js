const router = require("express").Router();
const ctrl = require("../controllers/boardController");

// 조회(Get 요청).
router.get("/", ctrl.list);
router.get("/:id", ctrl.detail);

// CRUD
router.post("/", ctrl.insert);

module.exports = router;
