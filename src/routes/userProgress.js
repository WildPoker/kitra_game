const express = require('express')
const authenticate = require('../middleware/auth')
const userProgressController = require('../controllers/userProgress')

const router = express.Router()

router.get('/user/progress', authenticate.authenticate, userProgressController.viewUserProgress)

module.exports = router
