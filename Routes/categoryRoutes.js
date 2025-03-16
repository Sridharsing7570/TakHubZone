const { Router } = require("express");
const router = Router();
const categoryController = require("../Controllers/categoryController");

router.post("/crete", categoryController.createCategory);

router.get("/get", categoryController.getCategories);

router.put("/update/:id", categoryController.upddateCategories);

router.delete("/delete/:id", categoryController.deleteCategory);

module.exports = router;
