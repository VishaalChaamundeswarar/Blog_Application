const fs = require('fs');
const path = require('path');

const users = require('../models/users.model');


function number(str){
     return /\d/.test(str);
}

function specialCharacter(str){
     return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}

function validateEmail(email){
     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
};

function exits(str){
     for(let i = 0; i < users.length;i++){
          if(users[i].email==str){
               return true;
          }
     }
     return false;
}

function check(data){
     console.log(`${data.email} ${!validateEmail(data.email)}`);
     if(data.name==''){
          console.log('Name is Empty');
          return {status:true,message:'Name is Empty'};
     }else if(number(data.name)){
          console.log('Name contains number');
          return {status:true,message:'Name should not contain number'};
     }else if(specialCharacter(data.name)){
          console.log('Name contains special characters');
          return {status:true,message:'Name should not contain special characters'};
     }else if(data.email==''){
          console.log('Email ID is Empty');
          return {status:true,message:'Email ID is Empty'};
     }else if(!validateEmail(data.email)){
          console.log('Invalid Email ID');
          return {status:true,message:'Invalid Email ID'};
     }else if(exits(data.email)){
          console.log('Email already exists');
          return {status:true,message:'Email ID already exists'};
     }else if(data.password.length<8){
          console.log('Password is less than 8 characters');
          return {status:true,message:'Password should be greater than 8 characters'};
     }else if(data.password.length>15){
          console.log('Password is greater than 15 characters');
          return {status:true,message:'Password shuold less than 15 characters'};
     }else if(!number(data.password)||!specialCharacter(data.password)){
          console.log('Password should have 1 sepical character and 1 number character');
          return {status:true,message:'Password should have 1 sepical character and 1 number character'};
     }else if(data.password!=data.confrimpassword){
          console.log('Password does not matches');
          return {status:true,message:'Password does not matches'};
     }else{
          return {status:false};
     }
}

function signUp(req,res) {
     const data = check(req.body);
     if(data.status){
          return res.json({message:data.message});
     }     
     const dir = path.join(__dirname,'..','models','users.model.js');
     let text = 'const users=[';
     for(let i=0;i<users.length;i++){
          let blog = [];
          for(let j=0;j<users[i].myblogs.length;j++){
               blog.push(users[i].myblogs[j]);
          }
          let bin = [];
          for(let j=0;j<users[i].mybins.length;j++){
               bin.push(users[i].mybins[j]);
          }
          
          text += `\n{\nname :'${users[i].name}',\nemail :'${users[i].email}',\npassword :'${users[i].password}',\nmyblogs :[${blog}],\nmybins:[${bin}]\n}`;
          
          if(users.length>0){
               text +=',';
          }
     }
     text += `\n{\nname :'${req.body.name}',\nemail :'${req.body.email}',\npassword :'${req.body.password}',\nmyblogs :[],\nmybins:[]\n}`;
     text+=`\n];\n\nmodule.exports =users;`;
     fs.writeFileSync(dir,text);
     return res.json({message:'New account created successfully'});
}

function signIn(req,res){
     console.log('signIn');
     console.log(req.body);
     if(req.body.email=='' && req.body.password==''){
          return res.json({status:false,message:'Email and password are required'});
     }else if(req.body.email==''){
          return res.json({status:false,message:'Email is required'});
     }else if(req.body.password==''){
          return res.json({status:false,message:'Password is required'});
     }else if(!validateEmail(req.body.email)){
          console.log('Invalid Email ID');
          return res.json({status:false,message:'Invalid Email ID'});
     }else if(exits(req.body.email)){
          const user = users.find(user => user.email === req.body.email && user.password === req.body.password);
          if(user){
               console.log({status:true,message:`Welcome ${user.name}!`,id:user.name});
               return res.json({status:true,message:`Welcome ${user.name}!`,id:JSON.stringify(user)});   
          }else{
              return res.json({status:false,message:`Invalid Password`});   
          }
     }else{
          return res.json({status:false,message:'Email does not exist'});
     }
}

module.exports = {signUp,signIn};