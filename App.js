import './App.css';
import { useState } from 'react';
import Modal from './modal';

// {id , title, checked }
function App(){
  const init = {
    id:"",
    input:"",
    type:"",
    isDone: false,
    doneTotal: 0,
  }
  const [tasks, setTasks] = useState([init])
  const [hidden, setHidden] = useState("")
  const [modal, setModal] = useState(false)

  const AddList = () => {
    setTasks({...tasks, id: createID, })
  }

  const createID = ()=>{
    let abc = "ABCDEFGHIJKLMNOPQR"
    let num = "1234567890"
    let newStr = abc.split("")[Math.floor(Math.random()* 10 + 1)] + abc.split("")[Math.floor(Math.random()* 10 + 1)] + abc.split("")[Math.floor(Math.random()* 10 + 1)]
    let newNum = num.split("")[Math.floor(Math.random()* 10)]+""+num.split("")[Math.floor(Math.random()* 10)]+""+num.split("")[Math.floor(Math.random()* 10)]
    return newStr +  newNum
  }


  const finished = (id) =>{
    const aa = tasks.map((val) => {
      if (val.id === id ){
        // val.isDone = !val.isDone;
        if(val.isDone){
         return  {...val, doneTotal: tasks.doneTotal + 1}
        } else {
          return {...val, doneTotal: tasks.doneTotal + 1}
        }
      }
      return val 
    })
    setTasks(aa)

  }

  const remove = (id) =>{
    let survive = tasks.filter(tasks => tasks.id !== id);
    let too = 0
    setTasks({...tasks, doneTotal: 0})

    setTasks(survive)
    setTasks(tasks.map((a)=>{
      if(a.isDone === true){
        too++
      }
      return({...a, doneTotal: too}
      )
    }))
  }

  const edit = (id)=>{
   
  }
  const modalChange=()=>{
    setModal(!modal)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className=' col-6'>
          <h1>To Do list</h1>
          Total {tasks.length}
          <p>Done {tasks.doneTotal}</p>
          <div className='d-flex gap-2'>
            <input type="text" placeholder='Add to do list' value={tasks.input} onChange={(e)=>{setTasks({...tasks , input : e.target})}}  className="form-control"/>
            <input type="hidden" value={hidden}/>
            <button className='btn btn-primary' onClick={AddList}>Add</button>
            <button className='btn btn-primary' onClick={modalChange}>Modal</button>
          </div>
        </div>
      </div>
      <div className='mt-3 pt-3 border-top '>
        {tasks.map((a) => {
          return(
            <div className='row d-flex gap-2 border rounded align-items-center p-2 m-1'> 
              <input type="checkbox" checked={a.isDone} className="col-1" onChange={() => finished(a.id)}/>
              <p className='col-8 m-0'>{a.input}</p>
              <button className='btn col-1  btn-danger' onClick={()=>remove(a.id)}>Delete</button>
              <button className='btn col-1  btn-warning' onClick={()=>edit(a.id)}>Edit</button>
            </div>
          )
        })}
      </div>
      <div>
        {modal && ( <Modal modal ={modal} setModal = {modalChange} setTasks={setTasks} tasks={tasks} addList={AddList} />)}
      </div>
    </div>
  )
  
}
export default App
