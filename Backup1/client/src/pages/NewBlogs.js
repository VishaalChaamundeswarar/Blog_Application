import React from "react";
import "./index.css";

const NewBLog = () => {

     return (
          <div className="container">
               <form>
                    <h1>Create New Blog</h1>
                    <input type="text" name="title"  id="title" placeholder="Enter the Title..." autoComplete="true"/>
                    <textarea type="textarea" name="textarea"  id="textarea" placeholder="Enter the Blog..." autoComplete="true" />
                    <br />
                    <button type="submit">Add New Blog</button>
               </form>
          </div>          
     );
};

export default NewBLog;
