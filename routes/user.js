const express = require('express');
const router = express.Router();
const { findAll, addUser, logIn, deleteUser, updateUser, getUserById } = require('../controllers/user');
const { userValidation } = require('../middlewares/userValidation');
const { logInValidation } = require('../middlewares/logInValidation')

router.post('/', userValidation, addUser);
router.post('/login', logInValidation, logIn);
module.exports = router;
