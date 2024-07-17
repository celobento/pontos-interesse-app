const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiControllers')

router.get('/test', apiController.test)

module.exports = router;