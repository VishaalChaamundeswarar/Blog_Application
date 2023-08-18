const express=require('express');
const {signIn}=require('../controllers/signInSignUP.controller');

const signInRouter = express.Router();

signInRouter.post('/', signIn);

module.exports = signInRouter;