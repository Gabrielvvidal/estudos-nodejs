const express = require('express')
const postController= require('../controllers/postController')

const router = express.Router()

router.get('/', postController.index)
router.get('/search/:id', postController.searchPost)

module.exports = router