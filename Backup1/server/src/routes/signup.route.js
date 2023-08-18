const express=require('express');
const {signUp}=require('../controllers/signInSignUP.controller');
const signUpRouter = express.Router();

signUpRouter.post('/', signUp);

module.exports = signUpRouter;