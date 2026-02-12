import { useState } from "react";
import Modal from "./modal";
export default function CustomModal(){
    const [showModalPopup,setShowModalPopup]=useState(false);
    function handleShowModalPopup(){
       
        if(showModalPopup===true){
            setShowModalPopup(false);
        }
        else{
            setShowModalPopup(true)
        }
        
    }
    function onClose(){
        setShowModalPopup(false);
    }
     return <div>
        <button className="show-modal-btn" onClick={handleShowModalPopup}>Open Modal Popup</button>
        {
            showModalPopup===true && <Modal onClose={onClose}></Modal>
        }
    </div>
}