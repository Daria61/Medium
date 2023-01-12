const Modal =({modal, setModal, input, setInput, addList})=>{
    const dis = modal ? "block" : "none"
    return (
        <div className="modal" style={{display: dis}} onClick={setModal}>
            <div className="modal-body" onClick={(e)=> e.stopPropagation()}>
                <div>
                    <h2>Edit</h2>
                </div>
                <div className="w-100">
                    <input id="hh" className="form-control" type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="edit or add"/>
                    <input type="hidden" value={""}/>
                    <button className="btn btn-primary" onClick={addList}>Add</button>
                </div>
                <div className="btn btn-warning" onClick={setModal}>Close</div>
            </div>
        </div>
    )
}
export default Modal