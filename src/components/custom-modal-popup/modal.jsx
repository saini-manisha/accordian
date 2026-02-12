import "./modal.css";


export default function Modal({id,header,body,footer,onClose}){
    return <div id={id|| "modal" } className="modal">
        <div className="modal-content">
             <div className="header">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <h3>{header?header:"Header"}</h3>
        </div>
        <div className="body">
            {
                body?body:<div>
                    <p>this is our Modal Body</p>
                </div>
            }
        </div>
        <div className="footer">
            { footer?footer:"Footer"}
        </div>
        </div>
       
    </div>
}