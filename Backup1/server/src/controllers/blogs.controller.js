const fs = require('fs');
const path = require('path');

const blogs = require('../models/blogs.model');

function getAllBlogs(req,res) {
     
     return res.json(blogs);
}

module.exports = {getAllBlogs};