const userService = require('../services/user.service');

const createUser = async (req, res) => {
    const newUser = req.body;
    const result = await userService.createUser(newUser);
    console.log(result);
    console.log(result.message);
    return res.status(result.type).json({ token: result.message });
};

const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.findById(id);
    res.status(200).json(user);
  };
  
module.exports = { createUser, getUsers, findById };