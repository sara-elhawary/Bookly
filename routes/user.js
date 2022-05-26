const express = require('express');
const router = express.Router();
const { findAll, addUser, logIn, deleteUser, updateUser, getUserById } = require('../controllers/user');
const { userValidation } = require('../middlewares/userValidation');
const { logInValidation } = require('../middlewares/logInValidation');
const {body,validationResult} = require('express-validator');

router.post('/',addUser);
router.post('/login', body("email").isEmail().notEmpty(),body("password").notEmpty(),logIn);
module.exports = router;
