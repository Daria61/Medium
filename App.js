import './App.css';
import {useState} from 'react'


function App(){
  const [list , setList] = useState('');
  const [tasks, setTasks] = useState([]);

  const push = () => {
    const newObj = {
      id: tasks.length,
      title : list,
      isDone: false,
    }
    const NewArr = [...tasks]
    NewArr.push(newObj)
    setTasks(NewArr)
    setList("")
  }
  const onDoneTask = (id) =>{
    const objList = tasks.map((val)=>{
      if( val.id === id){
        val.isDone = true
      }
      return val
    })
    setTasks(objList)
  }

  return (
   <div className='container'>
    <div className='row'>
      <div className='col-md-4 mt-4 d-flex gap-2'>
        <input type='text' placeholder='Add list' onChange={(e) => setList(e.target.value)} value={list} className="form-control "/>
        <button className='btn btn-primary' onClick={push} >Add</button> 
      </div>
    </div>
    <div className='row mt-3'>
      <div >
         {tasks.map((e)=>(
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
              <input type="checkbox" checked={e.isDone} onChange={()=> onDoneTask(e.id)}/>
              <h4>{e.title}</h4>
            </div>
            <div>
              <button className='btn btn-warning'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          </div>
         ))}
      </div>
    </div>
   </div>
  );
}

export default App;

