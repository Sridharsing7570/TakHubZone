const CategorySchema = require("../Models/CategorySchema");
const logger = require("../Config/logger");

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = new CategorySchema({ name, description });
    await category.save();

    return res
      .status(201)
      .json({ success: true, message: "Category created successfully." });
  } catch (error) {
    logger.error(`${error} get during creating category`);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// Read categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await CategorySchema.find();
    if (!categories) {
      return res.status(404).json({ message: "Category not found." });
    }
    return res.status(200).json({ success: true, data: categories });
  } catch (error) {
    logger.error(`${error} during read categories`);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later" });
  }
};

// Update Category
exports.upddateCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const updateCategory = await CategorySchema.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updateCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res
      .status(201)
      .json({ success: true, message: "Category updated successfully" });
  } catch (error) {
    logger.error(`${error} during updating category`);
    return res.status(500).json({
      message: "Internal server error. Please try again later",
      error,
    });
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await CategorySchema.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category deleted successfully" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    logger.error(`${error} during deleting category`);
    return res.status(500).json({ message: "Please try again later", error });
  }
};
