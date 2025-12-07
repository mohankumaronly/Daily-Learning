const express = require('express');
const { login, register } = require('../controller/userAuthController');

const authRouter = express.Router();

// this router for the login
authRouter.post('/login', login);

// this router for the register 
authRouter.post('/register', register);

module.exports = authRouter;