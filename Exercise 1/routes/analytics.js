const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

router.get('/analytics' , controller.analytics)

module.exports = router