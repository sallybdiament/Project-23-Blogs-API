const Joi = require('joi');
const { User } = require('../models');
const auth = require('./auth.service');

const createUser = async (newUser) => {
    const newUserSchema = Joi.object({
        displayName: Joi.string().required().min(8),
        // .rule({ 
        //     message: '"displayName" length must be at least 8 characters long' }),
        email: Joi.string().email().required(),
        // .rule({ message: '"email" must be a valid email' }),
        password: Joi.string().required().min(6),
        // .rule({ 
        //     message: '"password" length must be at least 6 characters long' }),
        image: Joi.string(),
    });
    const { error } = newUserSchema.validate(newUser);
    if (error) return { type: 400, message: { message: error.details[0].message } };
    const { email } = newUser;
    console.log(email);
    const user = await User.findOne({ where: { email } });
    if (!user) { 
       await User.create(newUser);
       const { token } = await auth.validateLogin(newUser);
       console.log(token);
        return { type: 201, message: token }; 
    }
    return { type: 409, message: { message: 'User already registered' } };
};

module.exports = { createUser };