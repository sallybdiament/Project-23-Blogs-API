const authService = require('../services/auth.service');

const login = async (req, res) => {
    const auth = authService.validateBody(req.body);
    if (auth.type === 400) {
        return res.status(auth.type).json({
        message: 'Some required fields are missing',
        }); 
    }

    // const { email, password } = authService.validateBody(req.body);
    const { email, password } = req.body;
    const token = await authService.validateLogin({ email, password });
    if (token.type === 400) {
        return res.status(400).json({
        message: 'Invalid fields',
        }); 
    }
    return res.status(200).json({ token });
};

module.exports = { login };