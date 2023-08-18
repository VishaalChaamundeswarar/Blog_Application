import React, { useCallback, useState } from "react";
import "./index.css";
import { httpSubmitSignup, httpSubmitSignIn } from "../hooks/request";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
     const navigate = useNavigate();
     const [isSignup, setIsSignup] = useState(false);
     const [signupmessage, setSignUpMessage] = useState('');
     const [loginmessage, setLoginInMessage] = useState('');
     const toggleForm = () => {
          setIsSignup(!isSignup);
     };
     const submitNewUser=useCallback(async(e)=>{
          e.preventDefault();
          const data= new FormData(e.target);
          const name= data.get('name');
          const email= data.get('email');
          const password= data.get('password');
          const confrimpassword = data.get('confrimpassword');
          //document.getElementById('password').value = '';
          const response= await(httpSubmitSignup({
               name,
               email,
               password,
               confrimpassword,
          }));
          setSignUpMessage(response);
           
     },[]);
     const submitSignIn=useCallback(async(e)=>{
          e.preventDefault();
          const data =new FormData(e.target);
          const email = data.get('email');
          const password = data.get('password');
          
          const response = await (httpSubmitSignIn({
               email,
               password,
          }));
          setLoginInMessage(response);
          setTimeout(() => {
               if(response.status === true) {
                    localStorage.setItem('Authorization',true);
                    localStorage.setItem('id',response.id); 
                    navigate("/home");
                    window.location.reload();
               } 
          }, 3000);
                   
     },[navigate]);

     const showPassword1=()=>{
          const pwd1=document.getElementById('password');
          const pwd2=document.getElementById('confrimpassword');
          if(pwd1.type==="text"){
               pwd1.type="password";
               pwd2.type="password";
          }else{
               pwd1.type="text";
               pwd2.type="text";
          }
     }
     const showPassword2=()=>{
          const pwd=document.getElementById('inpassword');
          if(pwd.type==="text"){
               pwd.type="password";
          }else{
               pwd.type="text";
          }
     }
     return (
          <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
               <div className="form-container sign-up-container">
                    <form onSubmit={submitNewUser}>
                         <br />
                         <h1>Create Account</h1>
                         { signupmessage && <p>{signupmessage.message}</p>}
                         <br />
                         <input type="text" name="name"  id="name" placeholder="Name"/>
                         <br />
                         <input type="text" name="email"  id="email" placeholder="Email"/>
                         <br />
                         <input type="password" name="password"  id="password" placeholder="Password"/>
                         <br />
                         <input type="password" name="confrimpassword"  id="confrimpassword" placeholder="Confrim Password"/>
                         <br />
                         <div id="showpassword"onClick={showPassword1}>Show password</div>
                         <br />
                         <button type="submit">SignUp</button>
                         <br />
                    </form>
               </div>
               <div className="form-container sign-in-container">
                    <form onSubmit={submitSignIn}>
                         <br />
                         <h1>Sign In</h1>
                         { loginmessage && <p>{loginmessage.message}</p>}
                         <br />
                         <input type="text" name="email" placeholder="Email"/>
                         <br />
                         <input type="password" name="password" id="inpassword" placeholder="Password"/>
                         <br />
                         <div id="showpassword" onClick={showPassword2}>Show password</div>
                         <br/> 
                         <button type="submit">Sign In</button>
                    </form>
               </div>
               <div className="overlay-container">
                    <div className="overlay">
                         <div className="overlay-panel overlay-left">
                              <h1>Welcome Back!</h1>
                              <br />
                              <p>
                              To keep connected with us please login with your personal info
                              </p>
                              <br />
                              <button className="ghost" onClick={toggleForm}>Sign In</button>
                         </div>
                         <div className="overlay-panel overlay-right">
                              <h1>Hello, Friend!</h1>
                              <br />
                              <p>Enter your details and start the journey with us</p>
                              <br />
                              <button className="ghost" onClick={toggleForm}>Sign Up</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default LoginSignup;
