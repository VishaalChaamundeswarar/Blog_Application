const express=require('express');
const {getAllBlogs}=require('../controllers/blogs.controller');

const allBlogsRouter = express.Router();

allBlogsRouter.get('/', getAllBlogs);

module.exports = allBlogsRouter;