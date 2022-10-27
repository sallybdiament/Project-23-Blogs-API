const Joi = require('joi');
const { Category } = require('../models');

const createCategory = async (newCategory) => {
    const newCategorySchema = Joi.object({
        name: Joi.string().required(),
    });
    const { error } = newCategorySchema.validate(newCategory);
    if (error) return { type: 400, message: { message: error.details[0].message } };
       const newCategoryCreated = await Category.create(newCategory);
       console.log(newCategoryCreated); 
       return { type: 201, message: newCategoryCreated }; 
};

const getCategories = async () => {
    const categories = await Category.findAll(); 
    return categories;
};

module.exports = { createCategory, getCategories };