const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const blogPostRouter = require('./blogPost.router');
const authRouter = require('./auth.router');
// const authMiddleware = require('../middleware/auth.middleware');

const routers = express.Router();
// rota pública
routers.use('/user', userRouter);
routers.use('/login', authRouter);
routers.use('/categories', categoryRouter);
routers.use('/post', blogPostRouter);

// routers.use(authMiddleware.validateToken);

// rotas privadas - precisar ter feito autenticação (token)

module.exports = routers;