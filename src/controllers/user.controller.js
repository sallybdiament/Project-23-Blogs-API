const userService = require('../services/user.service');

const createUser = async (req, res) => {
    const newUser = req.body;
    const result = await userService.createUser(newUser);
    console.log(result);
    console.log(result.message);
    return res.status(result.type).json({ token: result.message });
};

module.exports = { createUser };