import { useState,useEffect } from "react";
import "./styles.css";

function LoadMoreData(){
    const [images,setImages]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [count,setCount]=useState(0);
    const [hasMore,setHasMore]=useState(true);


    async function  fetchImages(){
        try{
            setLoading(true);
            setError(null);
        const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${count===0?0:count*10}`);
        const data=await response.json();
        setImages((prev)=>{
            const updated=[...prev,...data.products];
            setHasMore(updated.length<data.total);
            return updated;
        });
        
        
        
        }
        catch(e){
            
            setError(e.message ||"Something went wrong");
            setHasMore(false)
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        
        fetchImages();

    },[count]);
    
   
   return <div className="load-more-container">
    {error && <p>{error}</p>}
    
    <div >
        <div className="image-container">
        {
        images && images.length>0 && images.map((item,i)=>{
            
            return <div key={item.id}>
                <span>{i+1}</span>
                <img  alt={item.title} src={item.thumbnail}></img>
                <p>{item.title}</p>
            </div> 
        })
        }
    </div>

    { loading && <p>Images is Loading! Please wait</p>}

    <div className="load-more-btn">
        <button disabled={!hasMore} onClick={()=>setCount((prev)=>prev+1)}>Load More Data</button>
    </div>
    </div>

   </div>
}

export default LoadMoreData;