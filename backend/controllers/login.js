require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {handleResponse} = require('../services/handleResponse');

const users = [
    { id: 1, email: 'userprojeto1@gmail.com', password: bcrypt.hashSync('password1', 8) },
    { id: 2, email: 'userprojeto2@gmail.com', password: bcrypt.hashSync('password2', 8) }
];

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return handleResponse(res, 422, 'Email is required!');
    }
    if (!password) {
        return handleResponse(res, 422, 'Password is required!');
    }

    const user = users.find(u => u.email === email);
    if (!user) {
        return handleResponse(res, 404, `User with email ${email} not found.`);
    }

    const check_password = await bcrypt.compare(password, user.password);
    if (!check_password) {
        return handleResponse(res, 422, `Invalid password for user with email ${email}`);
    }

    try {
        const secret = process.env.SECRET;
        const token = jwt.sign(
            { id: user.id },
            secret,
            { expiresIn: '15m' }
        );

        return handleResponse(res, 200, 'Authentication successfully completed!', { token });
    } catch (error) {
        return handleResponse(res, 500, `An unexpected error occurred.`, { error: error.message, ip: req.ip });
    }
});

module.exports = router;