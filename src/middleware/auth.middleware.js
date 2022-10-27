const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Token not found' }); 
        }
        const payload = jwt.verify(token, secret);
      req.user = payload;
       return next();
    } catch (err) { 
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateToken };