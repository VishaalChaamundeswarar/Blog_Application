const express = require("express");
const cors = require("cors");

const homeRouter = require('./routes/home.route');
const signUpRouter = require('./routes/signup.route');
const signInRouter = require('./routes/signin.route.js');
const allBlogsRouter = require('./routes/allBlog.route.js');

const app = express();

app.use(cors({
     origin : "http://localhost:3000",
}));

app.use(express.json());

app.use("/home", homeRouter);
app.use("/SignUp",signUpRouter);
app.use("/SignIn",signInRouter);
app.use("/Allblog", allBlogsRouter)

module.exports = app;