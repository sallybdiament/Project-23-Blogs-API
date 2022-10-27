const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const newCategory = req.body;
    const result = await categoryService.createCategory(newCategory);
    return res.status(result.type).json(result.message);
};

const getCategories = async (req, res) => {
    const users = await categoryService.getCategories();
    res.status(200).json(users);
};

module.exports = { createCategory, getCategories };