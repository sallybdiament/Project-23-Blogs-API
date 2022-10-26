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
    const result = await authService.validateLogin({ email, password });
    if (result.type) {
        return res.status(400).json({
        message: 'Invalid fields',
        }); 
    }
    console.log(result.token);
    const { token } = result;
    console.log(token);
    return res.status(200).json({ token });
};

module.exports = { login };