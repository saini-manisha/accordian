import data from "./data";
import { useState } from "react";
import "./style.css"
function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        if (selected === getCurrentId) {
            setSelected(null);
            return;
        }
        setSelected(getCurrentId);

    }
    function handleMultiSelection(getCurrentId) {
        let cpyMultiple=[...multiple];
        const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrentId==-1){
            cpyMultiple.push(getCurrentId);
        }
        else{
            cpyMultiple.splice(findIndexOfCurrentId,1);
        }
        setMultiple(cpyMultiple);
        console.log(cpyMultiple)

    }
    return <div className="wrapper">
        <button className={enableMultiSelection?"onEnableClass":"offEnableClass"} onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {data && data.length > 0 ?
                data.map((item) => <div className="item">
                    <div onClick={enableMultiSelection
                        ? () => handleMultiSelection(item.id)
                        : () => handleSingleSelection(item.id)} className="title">
                        <h3>{item.que}</h3>
                        <span>+</span>
                    </div>
                    {(selected == item.id || multiple.indexOf(item.id)!=-1) && <div>{item.ans}</div>}
                </div>) : <div>No data found</div>}
        </div>

    </div>
}

export default Accordian;