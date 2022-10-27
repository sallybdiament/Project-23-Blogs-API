const { BlogPost, User, Category } = require('../models');

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

module.exports = { getPosts, findById };