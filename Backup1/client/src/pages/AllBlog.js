import React,{ useMemo,useCallback,useState,useEffect } from "react";
import { httpGetAllBlogs } from "../hooks/request";

function AllBlogs() {
     const [data, setData] = useState([]);
     const getResponse= useCallback(async()=>{
          const fetcheddata = await httpGetAllBlogs();
          setData(fetcheddata);
          localStorage.setItem('blogs', JSON.stringify(fetcheddata));
     },[]);
     const content=(data) =>{
          return data.split("<br/>");
     }
     const body = useMemo(()=>{
          return data?.map(data =>
               <div className="Allblogs"><h1>{data.title}</h1><h5>{data.date}</h5><h4>{data.aurthor}</h4><p>{content(data.body)}</p><br/></div>
          );
     },[data]);
     useEffect(() => {
          getResponse();
     }, [getResponse]);
     return (
          <div>
               <h1>Allblogs...</h1>
               <br/>
               {body}
          </div>
     );
}

export default AllBlogs;