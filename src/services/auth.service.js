const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = userSchema.validate(params);

    if (error) return { type: 400 };
};

const validateLogin = async ({ email, password }) => {
    // SELECT * FROM USERS WHERE EMAIL = XXXXX
    const user = await User.findOne({ 
        attributes: ['id', 'email', 'displayName', 'password'],
        where: { email } });

    if (!user || user.password !== password) {
        return { type: 400 };
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = jwtUtil.createToken(userWithoutPassword);

    return token;
};

// const validateToken = (token) => {
//     if (!token) {
//         const e = new Error('Token obrigatório!');
//         e.name = 'Token obrigatório';
//         throw e;
//     }

//     const user = jwtUtil.validateToken(token);

//     return user;
// };

module.exports = { validateBody, validateLogin };
    // , validateToken };