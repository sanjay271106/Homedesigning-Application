// import {FaUser } from "react-icons/fa"
import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
const Nav =()=> {
   const navigate = useNavigate();
   const handleLogin =()=> {
    navigate('/Login')
  };
    return (
        <>
        <nav>
           <div className="body2">
           
              <div className="left">
                    <h3>HomeStyle</h3>
              </div>
              <div className="middle">
                 <ul>
                    <li><a href=""  >Gallery</a></li>
                    <li><a href=""  >Living</a></li>
                    <li><a href=""  >Garden</a></li>
                    <li><a href=""  >Bedroom</a></li>
                    <li><a href=""  >Kitchen</a></li>
                    <li><a href=""  >Wardrobe</a></li>
                    <li><a href=""  >Furniture</a></li>
                 </ul>
              </div>
              <div className="right">
                    <Button variant="contained"  onClick={handleLogin}>
                        Login
                    </Button> 
                   
                   

              </div>
           </div>
           </nav>
          
        </>
    )
}

export default Nav