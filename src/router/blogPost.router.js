const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const blogPostController = require('../controllers/post.controller');

const router = express.Router();

// router.get('/', blogPostController.getPosts);
// router.get('/:id', blogPostController.findById);
router.get('/', authMiddleware.validateToken, blogPostController.getPosts);
router.get('/:id', authMiddleware.validateToken, blogPostController.findById);
router.post('/', authMiddleware.validateToken, blogPostController.createPost);
// router.put('/:id', authMiddleware.validateToken, blogPostController.update);

module.exports = router;