import './App.css';
import { useState } from 'react';
import Modal from './modal';

// {id , title, checked }
function App(){
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([])
  const [hidden, setHidden] = useState("")
  const [modal, setModal] = useState(false)

  const [doneTotal, setDoneTotal] = useState(0);

  const AddList = () => {
    if(hidden.length === 0 ){
      console.log(hidden);
      const NewObj = {
        id: tasks.length ,
        title: input,
        isDone : false
      }
      const NewArr = [...tasks]
      NewArr.push(NewObj)
      setTasks(NewArr)
      setInput('')
    }else{
      console.log(hidden);
      tasks.map((a)=>{
        if(hidden === a.id){
          a.title = input
          setInput("")
        }
        return(
          setHidden("")
          
        )
      })
    }
  }
  const finished = (id) =>{
    const objList = tasks.map((val) => {
      if (val.id === id ){
        val.isDone = !val.isDone;
        if(val.isDone){
          setDoneTotal( doneTotal + 1)
        } else {
          setDoneTotal( doneTotal - 1)
        }
      }
      return val 
    })
    setTasks(objList)
  }

  const remove = (id) =>{
    let survive = tasks.filter(tasks => tasks.id !== id);
    let too = 0
    setDoneTotal(0)
    console.log(doneTotal);
    setTasks(survive)
    tasks.map((a)=>{
      if(a.isDone === true){
        too++
      }
      return(
        setDoneTotal(too)
      )
    })
  }

  const edit = (id)=>{
    tasks.map((e) =>{
      if (e.id === id ){
        setInput(e.title)
        setHidden(id)
        console.log(hidden);
      } 
      return (
        tasks
      )
    })
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
          <p>Done {doneTotal}</p>
          <div className='d-flex gap-2'>
            <input type="text" placeholder='Add to do list' value={input} onChange={(e)=>{setInput(e.target.value)}}  className="form-control"/>
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
              <p className='col-8 m-0'>{a.title}</p>
              <button className='btn col-1  btn-danger' onClick={()=>remove(a.id)}>Delete</button>
              <button className='btn col-1  btn-warning' onClick={()=>edit(a.id)}>Edit</button>
            </div>
          )
        })}
      </div>
      <div>
        {modal && ( <Modal modal ={modal} setModal = {modalChange} input={input} setInput={setInput}  addList={AddList} />)}
      </div>
    </div>
  )
  
}
export default App
// import './App.css';
// import {useState} from 'react'


// function App(){
//   const [list , setList] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const push = () => {
//     const newObj = {
//       id: tasks.length,
//       title : list,
//       isDone: false,
//     }
//     const NewArr = [...tasks]
//     NewArr.push(newObj)
//     setTasks(NewArr)
//     setList("")
//   }
//   const onDoneTask = (id) =>{
//     const objList = tasks.map((val)=>{
//       if( val.id === id){
//         val.isDone = true
//       }
//       return val
//     })
//     setTasks(objList)
//   }

//   return (
//    <div className='container'>
//     <div className='row'>
//       <div className='col-md-4 mt-4'>
//         <h1>To Do List </h1>
//        <div className=' d-flex gap-2'>
//           <input type='text' placeholder='Add list' onChange={(e) => setList(e.target.value)} value={list} className="form-control "/>
//           <button className='btn btn-primary' onClick={push} >Add</button> 
//        </div>
//       </div>
//     </div>
//     <div className='row mt-3'>
//       <div >
//          {tasks.map((e)=>(
//           <div className='d-flex justify-content-between align-items-center'>
//             <div className='d-flex'>
//               <input type="checkbox" checked={e.isDone} onChange={()=> onDoneTask(e.id)}/>
//               <h4>{e.title}</h4>
//             </div>
//             <div>
//               <button className='btn btn-warning'>Edit</button>
//               <button className='btn btn-danger'>Delete</button>
//             </div>
//           </div>
//          ))}
//       </div>
//     </div>
//    </div>
//   );
// }

// export default App;