const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

//get user 1
router.get('/users1' , controller.users1)

//get user by id
router.get('/users/:id' , controller.getUserById)

//create user
router.post('/users' , controller.CreateUsers)

//delete user
router.delete('/users/:id' , controller.deleteUserById)


module.exports = router