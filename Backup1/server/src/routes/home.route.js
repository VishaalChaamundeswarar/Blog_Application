const express=require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res)=>{
     res.json({ message: "Hello from server!" , content : "kicked!" });
   })

module.exports = homeRouter;