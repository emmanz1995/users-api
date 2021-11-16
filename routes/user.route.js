const express = require('express');
const router = express.Router();
const userController = require('../controller/user.contoller');

router.post('/api/users/createuser', userController.createUser);

router.get('/api/users/getusers');

router.get('/api/users/getuser');

router.put('/api/users/updateuser');

router.delete('/api/users/deleteuser');

module.exports = router;