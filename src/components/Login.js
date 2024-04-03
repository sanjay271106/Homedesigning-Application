import {  FaBackward, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import img1 from '../assets/images/signin.jpg';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import React,{useState} from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {X} from 'lucide-react'

const Login =()=> {
    const navigate = useNavigate();
    const handleRegister =()=> {
     navigate('/Register')
    };
    const handleDash =()=>{
     navigate('/Dash')
    } 
    const handleHome =()=> {
     navigate('/')
    };
const [data,setData] = useState({
    username:'',
    password:''
})

const handleChange=(e)=>
{
    setData({...data,[e.target.id]:e.target.value})
}

const handleSubmit=async(e)=>
{
    e.preventDefault();
    await axios.get('http://localhost:8080/login' , data)
    console.log(data)
    handleDash();
}


    return(
        <>
        <div className="mainbody">
            <i className="ic" onClick={handleHome}><X size={40}/></i>
        <div className="body">
        <div class="container" id="container">
           
            <div class="form-container sign-in-container">
                <form action="#" onSubmit={handleSubmit}>
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><FaInstagram/></a>
                        <a href="#" class="social"><FaTwitter/></a>
                        <a href="#" class="social"><FaLinkedin/></a>
                    </div>
                    <span>or use your account</span>
                    <input type="text" placeholder="Username" required onChange={handleChange} className="inp"/>
                    <input type="password" placeholder="Password" required onChange={handleChange} className="inp"/>
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                    <h6>or</h6>
                    <div className="sign">
                    <h6>Don't have an account? <a className='sign' href='#' onClick={handleRegister}>signup</a></h6>
                    </div>
                </form>
                
            </div>
            <div class="overlay-container">
                <div class="images">
                    <img src={img1} alt="img1"/>
                </div>
            </div>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default Login;