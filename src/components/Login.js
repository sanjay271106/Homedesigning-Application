import {  FaBackward, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import img1 from '../assets/images/signin.jpg';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {X} from 'lucide-react'
const Login =()=> {
    const navigate = useNavigate();
    const handleRegister =()=> {
     navigate('/Register')
   };
    const handleHome =()=> {
     navigate('/')
   };
    const handle =()=> {
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
    const handleDash =()=>{
        navigate('/Dash')
    }
    setTimeout(() => {
     handleDash();
     }, 3000);
   };

    return(
        <>
        <div className="mainbody">
            <i className="ic" onClick={handleHome}><X size={40}/></i>
        <div className="body">
        <div class="container" id="container">
           
            <div class="form-container sign-in-container">
                <form action="#" onSubmit={handle}>
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><FaInstagram/></a>
                        <a href="#" class="social"><FaTwitter/></a>
                        <a href="#" class="social"><FaLinkedin/></a>
                    </div>
                    <span>or use your account</span>
                    <input type="text" placeholder="Username" required/>
                    <input type="password" placeholder="Password" required/>
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                    <h6>or</h6>
                    <div className="sign">
                    <h6>Don't have an account? <a className='sign' href='#' onClick={handleRegister}>signup</a></h6>
                    </div>
                </form>
                <ToastContainer />
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