const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', authMiddleware.validateToken, categoryController.createCategory);
router.get('/', authMiddleware.validateToken, categoryController.getCategories);
// router.post('/', categoryController.createCategory);
// router.get('/', categoryController.getCategories);

module.exports = router;
