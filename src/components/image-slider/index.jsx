import { useState,useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import data from "./data.js";
import "./style.css";
function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages =data?.length || 0;

    function handlePrevious() {
        setCurrentImageIndex((prev)=>prev===0?totalImages-1:prev-1);
    }

    function handleNext() {
        setCurrentImageIndex((prev)=>prev===totalImages-1?0: prev+1);

    }

    if (totalImages === 0) {
        return <div>No Images Present</div>
    }
    console.log("before useeffect")
    useEffect(()=>{
        console.log("inside useEffect")
        const id=setTimeout(()=>{
            console.log("inside setTimeout")
            handleNext();
        },5000);

        return ()=>{
            console.log("inside return statement")
            clearTimeout(id);
        }
    },[currentImageIndex]);

    return <div className="container">
        {/* left arrow */}
        <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className="arrow arrow-left"
            aria-label="Previous image"

        />
        {/* images */}
        {
            data.map((currentImg, index) => {

                return <img
                    className={currentImageIndex === index ? "current-image" : "hide-current-image"}
                    key={currentImg.id}
                    src={currentImg.download_url}
                    alt={currentImg.download_url}

                ></img>
            }) 
        }
        {/* right arrow */}
        <BsArrowRightCircleFill
            onClick={handleNext}
            aria-label="Next image"
            className="arrow arrow-right" />
        {/* indicators */}
        <span className="circle-indicators">
            { data.map((currImg, index) => {
                return <button onClick={() => setCurrentImageIndex(index)} key={currImg.id} className={currentImageIndex === index ? "current-indicator" : "current-indicator inactive-indicator"}></button>
            })}
        </span>
    </div>
}

export default ImageSlider;