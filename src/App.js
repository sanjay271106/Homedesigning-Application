import React from 'react'
// import { Button, Offcanvas } from 'react-bootstrap';

import Body from './components/Body';
import Login from './components/Login'
import './assets/cssfiles/Login.css'
import Register from './components/Register';
import './assets/cssfiles/Register.css'
import Dash from './pages/Dash';
import './assets/cssfiles/Dash.css'
import Admin from './pages/Admin';
import './assets/cssfiles/Admin.css'
import AdminDash from './pages/AdminDash';
import './assets/cssfiles/Admindash.css'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Usertable from './pages/Usertable';
import './assets/cssfiles/Usertable.css'

// import { FaHandHoldingMedical } from 'react-icons/fa';
const App =()=> {
    return (
      <>
        
        <Router>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Dash" element={<Dash/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/Admindash" element={<AdminDash/>}/>
            <Route path="/Table" element={<Usertable/>}/>

          </Routes>
        </Router>
      </>
    )
}
export default  App;
