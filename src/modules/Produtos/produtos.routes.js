const { Router } = require("express");

const controller = require("./produtos.controller");
const validation = require("./produtos.validation");
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", validation.getOne, controller.getOne);
router.post("/", validation.create, controller.create);
router.put("/:id", validation.update, controller.update);
router.delete("/:id", validation.delete, controller.delete);

module.exports = router;
