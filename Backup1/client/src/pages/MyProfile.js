import React,{useState,useCallback,useEffect} from "react";

function MyProfile() {
     const [data,setData]=useState({});

     const getResponse= useCallback(async()=>{
          setData(JSON.parse(localStorage.getItem("id")));
     },[]);
     useEffect(() => {
          getResponse();
     }, [getResponse]);

     return (
               <div>
                    <h1>Name : {data.name}</h1>
                    <h1>Email : {data.email}</h1>
                    <h1>Blogs : {data.myblogs}</h1>
               </div>
          );
}

export default MyProfile