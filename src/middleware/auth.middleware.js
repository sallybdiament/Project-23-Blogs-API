// const authService = require('../services/auth.service');
const jwt = require('jsonwebtoken');

const secret = 'suaSenhaSecreta';

const validateToken = async (req, res, next) => {
    // const { authorization } = req.headers;

    // const user = authService.validateToken(authorization);
    // req.user = user;

    // next();
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Token not found' }); 
    }
    try {
      const payload = jwt.verify(token, secret);
      req.user = payload;
       return next();
    } catch (err) { 
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateToken };