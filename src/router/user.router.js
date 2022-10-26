const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', authMiddleware.validateToken, userController.getUsers);
router.get('/:id', authMiddleware.validateToken, userController.findById);

module.exports = router;