const Joi = require('joi');
const { BlogPost, User, Category, PostCategory } = require('../models');

const getPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      }); 
    return posts;
};

const findById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      }); 
    if (!post) {
        return { type: 404, result: { message: 'Post does not exist' } }; 
    }
    return { type: 200, result: post };
};

const createPostCategory = async (newPostObj, postId) => {
  const create = newPostObj.categoryIds.map((c) => PostCategory.create({ postId, categoryId: c }));
  await Promise.all(create);
};

const createPost = async (newPost, userId) => {
  const newPostSchema = Joi.object({
    title: Joi.string().required().messages({ 
        'string.empty': 'Some required fields are missing' }),
    content: Joi.string().required().messages({ 
      'string.empty': 'Some required fields are missing' }),
    categoryIds: Joi.required().messages({ 
      'string.empty': 'Some required fields are missing' }),
});
const { error } = newPostSchema.validate(newPost);
if (error) return { type: 400, message: { message: error.details[0].message } };
const arrayCatIds = newPost.categoryIds.map((category) => Category.findByPk(category));
const resultArray = await Promise.all(arrayCatIds);
const checkCatIds = resultArray.some((query) => query === null);
if (checkCatIds) return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
const newPostObj = { ...newPost, userId };
const newPostCreated = await BlogPost.create(newPostObj);
await createPostCategory(newPostObj, newPostCreated.id);
return { type: 201, message: newPostCreated };
};

module.exports = { getPosts, findById, createPost };