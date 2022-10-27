const postService = require('../services/post.service');

// const createPost= async (req, res) => {
//     const newPost = req.body;
//     const result = await postService.createPost(newPost);
//     return res.status(result.type).json(result.message);
// };

const getPosts = async (req, res) => {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const post = await postService.findById(id);
    res.status(post.type).json(post.result);
  };

module.exports = { getPosts, findById };