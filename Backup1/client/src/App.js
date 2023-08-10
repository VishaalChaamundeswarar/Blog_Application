import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
     const [message, setMessage] = useState("");
     const [content, setContent] = useState("");

  useEffect(() => {
     axios.get("http://localhost:8000/message",{ crossdomain: true })
      .then(res => {setMessage(res.data.message);
          setContent(res.data.content);
      })
  }, []);

  return (
    <div className="App">
          <h1>{message}</h1>
          <h1>{content}</h1>
    </div>
  );
}

export default App