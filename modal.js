const Modal =({modal, setModal, addList , Obj, setObj, init, editStatus})=>{
    const dis = modal ? "block" : "none"
    if(editStatus){
        setObj(init)
    }
    return (
        <div className="modal " style={{display: dis}} onClick={setModal}>
            <div className="modal-body" onClick={(e)=> e.stopPropagation()}>
                <div>
                    <h2>Edit</h2>
                </div>
                <div className="w-100">
                    <input  className="form-control" type="text" value={Obj.input} onChange={(e)=> setObj({...Obj, input: e.target.value})} placeholder="Title here"/>
                    <select className="form-select my-2" value={Obj.type}  onChange={(e)=> setObj({...Obj, type: e.target.value })}>
                        <option value="0">Select</option>
                        <option value="1">personal</option>
                        <option value="2">work</option>
                        <option value="3">other</option>
                    </select>
                    <input type="checkbox" id="imp"  className="me-2"  onChange={(e)=> setObj({...Obj, isCope: e.target.checked})}/>
                    <label for="imp">Importend</label>
                </div>
                <div className="row justify-content-between px-3">
                <div className="btn btn-warning col-5" onClick={setModal}>Close</div>
                <button className="btn btn-primary col-5" onClick={addList}>{editStatus? "Add": "save change"}</button>
                </div>
            </div>
        </div>
    )
}
export default Modal