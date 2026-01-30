import { useEffect, useState } from "react";
import "./style.css"
function CreateRandomColor() {

    const [colorCodeType, setColorCodeType] = useState("RGB");
    const [colorCode, setColorCode] = useState("rgb(74,251,174)");

    function handleRandomGenerate(len){
        return Math.floor(Math.random() * len);

    }
    function handleColorGenerate() {
        console.log(colorCodeType)
        if(colorCodeType==="RGB"){
            const r = handleRandomGenerate(256);
        const g = handleRandomGenerate(256);
        const b =handleRandomGenerate(256);
        setColorCode(`rgb(${r},${g},${b})`);
        }
        else{
            const colorCodeText=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
            let hexCode="#";
            for(let i=0;i<6;i++){
                hexCode+=colorCodeText[handleRandomGenerate(colorCodeText.length)];
            }
            setColorCode(hexCode);
        }
    }
    useEffect(()=>{
       handleColorGenerate();
        
    },[colorCodeType])
    return <div className="wrapper" style={{ background: `${colorCode}`, color: "white", width: "100vw", height: "100vh" }} >

        <div className="generateBtn">
            <button onClick={()=>setColorCodeType("HEX")}>Hex Color</button>
            <button onClick={()=>setColorCodeType("RGB")}>RGB Color</button>
            <button onClick={handleColorGenerate}>Generate Random Color</button>
        </div>
        <div className="colorContent">
            <p className="colorCodeType">{colorCodeType}</p>
            <p className="colorCode">{colorCode}</p>
        </div>

    </div>
}

export default CreateRandomColor;