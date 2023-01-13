import './App.css';
import { useState } from 'react';
import Modal from './component/modal';
import Todolist from './component/Todolist';
function App(){
  const init = {
    id:"",
    input:"",
    type:0,
    isCore : false,
    isDone: false,
  }
  const [tasks, setTasks] = useState([])
  const [modal, setModal] = useState(false)
  const [doneTotal, setDoneTotal] = useState(0)
  const [Obj, setObj] = useState(init)
  const [editStatus, setEditStatus]= useState(false)

  const AddList = () => {
    setTasks([...tasks, {...Obj, id: createID()}])
    setEditStatus(false)
    setObj(init)
    setModal(!modal)
  }
  const createID = ()=>{
    let abc = "ABCDEFGHIJKLMNOPQR"
    let num = "1234567890"
    let newStr = abc.split("")[Math.floor(Math.random()* 10 + 1)] + abc.split("")[Math.floor(Math.random()* 10 + 1)] + abc.split("")[Math.floor(Math.random()* 10 + 1)]
    let newNum = num.split("")[Math.floor(Math.random()* 10)]+""+num.split("")[Math.floor(Math.random()* 10)]+""+num.split("")[Math.floor(Math.random()* 10)]
    return newStr +  newNum
  }
  const modalChange=()=>{
    setModal(!modal)
  }
  // const done=(id)=>{
  //   tasks.map((a)=>{
  //     if(id === a.id){
  //       console.log(a);
  //       // let cop = {...tasks}
  //       // setTasks([...tasks, ...a, isDone : !a.isDone])
  //       if(a.id){
  //         setDoneTotal(doneTotal + 1)
  //       }else {
  //         setDoneTotal(doneTotal - 1)
  //       }
  //     }
  //   })
  // }
  const deleteList =(id)=>{
    return(
    setTasks(tasks.filter((obj)=> id !== obj.id))
    )
  }
  const edit=(id)=>{
    tasks.map((a)=>{
      if(id===a.id){
        setObj({...Obj, id: a.id,  input: a.input,  type: a.type,  isCore :a.isCore, isDone: a.isDone})
      }
    })
    setEditStatus(true)
    modalChange()
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className=' col-6'>
          <h1>To Do list</h1>
          Total {tasks.length}
          <p>Done {doneTotal}</p>
          <div className='d-flex gap-2'>
            <button className='btn btn-primary' onClick={modalChange}>Add List</button>
          </div>
        </div>
      </div>
      <Todolist tasks={tasks} setTasks={setTasks}  deleteList={deleteList} edit={edit} />
      <div>
        {modal && ( <Modal modal ={modal} setModal = {modalChange}  setTasks={setTasks} tasks={tasks} addList={AddList} Obj={Obj} setObj={setObj} editStatus={editStatus} init={init}/>)}
      </div>
    </div>
  )
}
export default App