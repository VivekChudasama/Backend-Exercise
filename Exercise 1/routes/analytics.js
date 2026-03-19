const express = require('express');
const router = express.Router();
const controller = require('../controllers/analytics')

//get the analytics of Total request , Individaual request , Average time of all the request
router.get('/analytics' , controller.analytics)

module.exports = router