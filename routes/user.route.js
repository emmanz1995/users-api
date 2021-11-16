const express = require('express');
const router = express.Router();
const userController = require('../controller/user.contoller');

router.post('/api/users/createuser', userController.createUser);

router.get('/api/users/getusers', userController.getUsers);

router.get('/api/users/getuser/:id', userController.getUser);

router.put('/api/users/updateuser/:id', userController.updateUser);

router.delete('/api/users/deleteuser/:id', userController.deleteUser);

module.exports = router;