const Category = require("../Models/CategoryModel");

// ✅ Get All Categories
const GetAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Category fetch error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create Category
const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (error) {
    console.error("Category create error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Category
const UpdateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.update({ name });

    res.status(200).json(category);
  } catch (error) {
    console.error("Category update error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  GetAllCategories,
  CreateCategory,
  UpdateCategory,
};