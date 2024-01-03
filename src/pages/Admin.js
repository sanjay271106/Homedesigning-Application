import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ShieldCheck,X} from 'lucide-react'
const Admin =()=> {
 
    const name1="sanjay"
    const pwd1="1106"
    const navigate = useNavigate();
    const handleHome =()=> {
        navigate('/')
      };
    const handle =(e)=>{
        e.preventDefault()
        let name = document.getElementById("uname").value;
        let pwd = document.getElementById("pass").value;
   
    if(name === name1 && pwd===pwd1)
    {
        toast.success('Login successful!', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            onClose: () => {},
          });   
          const handleAdm=()=>{
            navigate('/Admindash')
      }
      setTimeout(() => {
          handleAdm();
      }, 3000);
    }
    else {
        alert('invalid username or password')
    }
   
    }
    return (
    <>
       
     <div className="body4">
       <form class="form" onSubmit={handle}>
       <p class="form-title"><h1>Hello Admin</h1></p>
       <p ><ShieldCheck size={50} /></p>
          <input type="text" placeholder="Enter username" id="uname"/>
          <input type="password" placeholder="Enter password" id="pass"/>
         <button type="submit" class="submit" >Sign in</button>
       </form>
       <ToastContainer />
     </div>
    </>
    )
}
export default Admin;