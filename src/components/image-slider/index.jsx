import { useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import data from "./data.js";
import "./style.css"
function ImageSlider(){
    const [currentImageIndex,setCurrentImageIndex]=useState(0);
    function handlePrevious(){
        setCurrentImageIndex(currentImageIndex===0?data.length-1: currentImageIndex-1);
    }

    function handleNext(){
        setCurrentImageIndex(currentImageIndex===data.length-1?0: currentImageIndex+1);

    }
    return <div className="container">
        <BsArrowLeftCircleFill onClick={()=>handlePrevious()} className="arrow arrow-left"/>
        
        {
            data && data.length >0 ?data.map((currentImg,index)=>{
                console.log(currentImageIndex===index?"current-image":"hide-current-image")
                return <img
                className={currentImageIndex===index?"current-image":"hide-current-image"}
                key={currentImg.id}
                src={currentImg.download_url}
                alt={currentImg.download_url}
                
                ></img>
            }):null
        }
        <BsArrowRightCircleFill onClick={()=>handleNext()} className="arrow arrow-right"/>
        <span className="circle-indicators">
            {data && data.length>0?data.map((currImg,index)=>{
                return <button onClick={()=>setCurrentImageIndex(index)} key={currImg.id} className={currentImageIndex===index?"current-indicator current-indicator":"current-indicator inactive-indicator"}></button>
            }):null}
        </span>
    </div>
}

export default ImageSlider;