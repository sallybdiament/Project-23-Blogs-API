const Joi = require('joi');
const { User } = require('../models');
const auth = require('./auth.service');

const createUser = async (newUser) => {
    const newUserSchema = Joi.object({
        displayName: Joi.string().required().min(8),
        // .messages({ 
        //     'string.base': `"displayName" should be a type of 'text'`,
        //     'string.empty': `"displayName" cannot be an empty field`,
        //     'string.min': '"displayName" length must be at least 8 characters long',
        //     'any.required': `"displayName" is a required field` }),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
        image: Joi.string(),
    });
    const { error } = newUserSchema.validate(newUser);
    if (error) return { type: 400, message: { message: error.details[0].message } };
    const { email } = newUser;
    const user = await User.findOne({ where: { email } });
    if (!user) { 
       await User.create(newUser);
       const { token } = await auth.validateLogin(newUser);
       console.log(token);
        return { type: 201, message: token }; 
    }
    return { type: 409, message: { message: 'User already registered' } };
};

const getUsers = async () => {
    const users = await User.findAll(); 
    return users;
};

const findById = async (id) => {
    const user = await User.findByPk(id);
    return user;
};

module.exports = { createUser, getUsers, findById };