import './App.css';
import { useState } from 'react';

// {id , title, checked }
function App(){
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([])

  const [doneTotal, setDoneTotal] = useState(0)

  const AddList = () => {
    const NewObj = {
      id: tasks.length ,
      title: input,
      isDone : false
    }
    const NewArr = [...tasks]
    NewArr.push(NewObj)
    setTasks(NewArr)
    setInput('')
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
  return (
    <div className='container'>
      <div className='row'>
        <div className=' col-6'>
          <h1>To Do list</h1>
          Total {tasks.length}
          <p>Done {doneTotal}</p>
          <div className='d-flex gap-2'>
            <input type="text" placeholder='Add to do list' value={input} onChange={(e)=>{setInput(e.target.value)}}  className="form-control"/>
            <button className='btn btn-primary' onClick={AddList}>Add</button>
          </div>
        </div>
      </div>
      <div className='mt-3 pt-3 border-top '>
        {tasks.map((a) => {
          return(
            <div className='row d-flex gap-2 border rounded align-items-center p-2 m-1'> 
              <input type="checkbox" checked={a.isDone} className="col-1" onChange={() => finished(a.id)}/>
              <p className='col-8 m-0'>{a.title}</p>
              <button className='btn col-1  btn-danger'>Delete</button>
              <button className='btn col-1  btn-warning'>Edit</button>
            </div>
          )
        })}
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
