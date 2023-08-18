import React, { useCallback, useState, useEffect } from "react";
import { httpGetResponse } from "../hooks/request";

function Home() {
     const [data, saveMessage] = useState("");

     const getResponse= useCallback(async()=>{
          const fetchedResponse = await httpGetResponse();
          saveMessage(fetchedResponse);
     },[]);
     useEffect(() => {
          getResponse();
     }, [getResponse]);

  return (
    <div className="App">
          <h1>{data.message}</h1>
          <h1>{data.content}</h1>
    </div>
  );
}

export default Home