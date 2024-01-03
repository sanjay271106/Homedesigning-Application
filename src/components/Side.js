import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import {IoMdMenu} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';

const Sidebar = ({ show, onHide }) => {
  const navigate = useNavigate();
  const handleLogin =()=> {
   navigate('/Login')
 };

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My HomeStyle</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

    <div className='sidepanel'>
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
      <button>Reviews</button>
      <button onClick={handleLogin}>My&nbsp;account</button>
    </div>
        
    </Offcanvas.Body>
    </Offcanvas>

  );
};

const Side = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <>
    <div className="sidepanel">
      
      <IoMdMenu className="menu"  onClick={handleToggleSidebar}/>
      <Sidebar show={showSidebar} onHide={() => setShowSidebar(false)} />
   
    </div>
    </>
  );
};

export default Side;