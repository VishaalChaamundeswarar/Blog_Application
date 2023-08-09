const express = require('express');
const cors = require('cors');

const homeRouter = require('./routes/home.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req,res,next) => {
     const stime=new Date();
     next();
     const dtime = new Date()-stime;
     console.log(`${req.method} ${req.url} ${dtime}ms`);
});

app.use('/',homeRouter);

module.exports = app;