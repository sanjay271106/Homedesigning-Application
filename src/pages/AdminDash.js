import { Home ,Info, PlusCircle, Mail, PenLine, User, Star } from 'lucide-react';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Usertable from './Usertable';
// import { FaHome } from 'react-icons/fa';

const AdminDash =()=> {
    const navigate = useNavigate();
    const handleHome =()=> {
     navigate('/')
    }
    const handleDash =()=> {
     navigate('/Dash')
    }
    const [sam,setSam] = useState(false)
    const Toggle=()=>{
        setSam(!sam)
    }
    return (
        <>
        <div className='topbar1'>
            <div className='title1'>
                <h3>HomeStyles</h3>
            </div>
            <div className='admin'>
            <button  onClick={handleHome}>
                <div className='btn1'>
                <div className='i1'><Home/></div>
                <div className='b1'>Home</div>
                </div>
            </button>
            </div>
        </div>
        <div className='container2'>
           <div class="sidepanel2">
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><Home/></div>
                <div className='b1'>Dashboard</div>
                </div>
            </button>
            <button className='dashb' onClick={()=>{Toggle()}}>
                <div className='btn1'>
                <div className='i1'><Info /></div>
                <div className='b1'>Users&nbsp;Info</div>
                </div>
            </button>
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><PlusCircle /></div>
                <div className='b1'>Add&nbsp;Users</div>
                </div>
            </button>
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><Mail /></div>
                <div className='b1'>Messages</div>
                </div>
            </button>
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><PenLine /></div>
                <div className='b1'>Customize</div>
                </div>
            </button>
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><Star /></div>
                <div className='b1'>Reviews</div>
                </div>
            </button>
            <div className='sidepanel4'>
            <button className='ud' onClick={handleDash}>
                <div className='btn1'>
                <div className='i1'><User/></div>
                <div className='b1'>User&nbsp;Board</div>
                </div>
            </button>
            </div>
        </div>
           <div class="content2">
              {/* <h2>Admin Dashboard Content</h2> */}
              {sam?(<Usertable/>):(<></>)}
           </div>
      </div>
      </>
    )
}
export default AdminDash;