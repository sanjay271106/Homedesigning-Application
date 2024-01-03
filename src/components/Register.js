import { FaFacebook, FaGooglePlus, FaGooglePlusG, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import img2 from '../assets/images/register.jpg';
import {useNavigate} from 'react-router-dom'
import {HandMetal, X} from 'lucide-react'
import {toast, ToastContainer } from "react-toastify";
import React,{useState} from 'react';
import {addUser} from '../services/Api'


const Register =()=> {

    const navigate = useNavigate();
    const handleHome =()=> {
        navigate('/')
      };
     
    const [data,setData] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleChange=(e)=>
    {
        setData({...data,[e.target.id]:e.target.value})
    }

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
            await addUser(data)
                toast.success('Register successful!', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    onClose: () => {},
                  });   
                  const handleHome =()=> {
                    navigate('/')
                   };
                  setTimeout(() => {
                  handleHome();
                  }, 3000);
        }
        catch(e){
          console.log(e);
        }
    }
   

    return(
        <>
        <i className="ic" onClick={handleHome}><X size={40}/></i>
        <div className="body">
        <div class="container" id="container">
           
            <div class="form-container sign-in-container">
                <div className="images">
                    <img src={img2} alt="img2"/>
                </div>
            </div>
            <div class="overlay-container">
            <form action="#" onSubmit={handleSubmit}>
                <h1>Create New</h1>
                    <div class="social-container">
                        <a href="#" class="social"><FaGooglePlusG/></a>
                        <a href="#" class="social"><FaFacebook/></a>
                        <a href="#" class="social"><FaLinkedin/></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text"  id='username' placeholder='username' onChange={handleChange} required/>
                    <input type="email"  id='email' placeholder='email' onChange={handleChange} required/>
                    <input type="password" id='password' placeholder='password' onChange={handleChange} /><br/>
                    <button >Sign Up</button>
                </form>
                <ToastContainer/>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Register;