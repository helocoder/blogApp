const express = require('express');
const router = express.Router();

const BlogController = require('../controllers/BlogController')



router.get('/blogs/create',BlogController.blog_create);
router.get('/blogs/:id',BlogController.blog_detail);
router.delete('/blogs/:id',BlogController.delete_blog);



module.exports = router;

