import React, { useState, useEffect } from 'react'
import {getuser,deleteUser} from '../services/Api'
import { useNavigate } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
const Usertable =()=> {
    
    const navigate = useNavigate()
    const [user,setUser] = useState([])

    const fetchData =async()=> {
       try {
           const res = await getuser()
           setUser(res.data)
       }
       catch(e){
         console.log(e)
       }
    }

    const handleDelete =async(id)=>{
        try{
            const res = await deleteUser(id)
            if(res.status === 200){
                alert('deleted')
            }
            fetchData();
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect (()=>{
        fetchData()
    },[])
    return (
        <>
        <div className='body9'>
        <div className='table1'>
           <table className='utab'>   
               <thead>
                 <tr>
                    <th>Username</th>
                    <th>Emaill</th>
                    <th>Password</th>
                    <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                {
                    user.map ((user)=>(
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button className="table" onClick={()=>handleDelete(user.id)}><Trash2 /></button></td>
                  </tr>
                  ))
                }
               </tbody>
           </table>
           </div>
           </div>
        </>
    )
}
export default Usertable;