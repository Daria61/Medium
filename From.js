import React, { useState } from 'react'

export default function From() {
    const init ={
        "username":"",
        "password":"",
        "userType":"",
        "firstName": "",
        "lastName": "",
        "userImg":"",
        "organization": ""
    }
    const [user, setUser] = useState(init)
    const addUser=(e)=>{
        e.preventDefault()
        fetch('https://medium-api-psi.vercel.app/api/users',
        {
            method: "POST", 
            body: JSON.stringify(
                user)
        })
        .then((res)=> res.json)
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=> console.log(err))

        setUser(init)
    }
  return (
    <div>
        <div>
            <input className='form-control m-3' placeholder='user name' value={user.username} onChange={(e)=> setUser({...user, username: e.target.value})}/>
        </div>
        <div>
            <input className='form-control m-3' placeholder='password' value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/>
        </div>
        <div>
            <select className='form-select m-3' value={user.userType} onChange={(e)=> setUser({...user, userType: e.target.value})}>
                <option value='0'>Select User Type</option>
                <option value='1'>User</option>
                <option value='2'>Admin</option>
                <option value='3'>Special User</option>
            </select>
        </div>
        <div>
            <input className='form-control m-3' placeholder='First Name' value={user.firstName} onChange={(e)=> setUser({...user, firstName: e.target.value})}/>
        </div>
        <div>
            <input className='form-control m-3' placeholder='Last Name' value={user.lastName} onChange={(e)=> setUser({...user, lastName: e.target.value})}/>
        </div>
        <div>
            <input className='form-control m-3' placeholder='Only Link in here' value={user.userImg} onChange={(e)=> setUser({...user, userImg: e.target.value})}/>
        </div>
        <div>
            <input className='form-control m-3' placeholder='Organization' value={user.organization} onChange={(e)=> setUser({...user, organization: e.target.value})}/>
        </div>
        <button className='btn btn-outline-warning m-3' onClick={addUser}>Add</button>
    </div>
  )
}
