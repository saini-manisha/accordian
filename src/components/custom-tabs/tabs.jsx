import { useState } from "react";
import "./tabs.css"
export default function Tabs({tabsContent,onChange}){

    const [currentTabIndex,setCurrentTabIndex]=useState(0);

    function handleCurrentTabContent(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
    }
    return <div className="wrapper">
        <div className="heading">
            {tabsContent.map((tab,index)=><div 
            className={index===currentTabIndex ?"active":""}
            key={tab.label}
            onClick={()=>handleCurrentTabContent(index)}
            >
                <span>{tab.label}</span>
            </div>)}
        </div>
        <div className="body">
            <div className="content" style={{color:"red"}}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    </div>

}