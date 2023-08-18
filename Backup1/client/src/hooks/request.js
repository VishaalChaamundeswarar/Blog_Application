const API_URL = 'http://localhost:8000';

async function httpGetResponse() {
     const response = await fetch(`${API_URL}/home`);
     const getResponse = await response.json();
     return getResponse;
}

async function httpSubmitSignup(userdata) {
     try{
          const response = await fetch(`${API_URL}/SignUp`,{
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(userdata)
          });
          const getResponse = await response.json();
          return getResponse;
     }catch(e){
          console.log(e);
     }
}

async function httpSubmitSignIn(userdata) {
     try{
          const response = await fetch(`${API_URL}/SignIn`,{
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(userdata)
          });
          const getResponse = await response.json();
          return getResponse;
     }catch(err){
          console.log(err);
     }
}

async function httpGetAllBlogs() {
     try{
          const response = await fetch(`${API_URL}/Allblog`);
          return await response.json();
     }catch(err){
          console.log(err);
     }
}

export{
     httpGetResponse,
     httpSubmitSignup,
     httpSubmitSignIn,
     httpGetAllBlogs,
};