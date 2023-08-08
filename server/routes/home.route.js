const express = require('express');

const {gethome}= require('../controllers/home.controller');

const homeRouter = express.Router();

homeRouter.get('/',gethome);

module.exports = homeRouter;