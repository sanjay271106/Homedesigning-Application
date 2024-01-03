import { Home ,Info, LayoutGrid, LogOut, Mail, Settings, UserCog } from 'lucide-react';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';

const Dash =()=> {
    const navigate = useNavigate();
    const handleAdmin =()=> {
     navigate('/Admin')
    }
    const handleHome =()=> {
     navigate('/Login')
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
            <button  onClick={()=>{Toggle()}}>
                <div className='btn1'>
                <div className='i1'><UserCog/></div>
                <div className='b1'>Admin</div>
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
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><Info /></div>
                <div className='b1'>Personal&nbsp;Info</div>
                </div>
            </button>
            <button className='dashb'>
                <div className='btn1'>
                <div className='i1'><LayoutGrid /></div>
                <div className='b1'>My&nbsp;Designs</div>
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
                <div className='i1'><Settings /></div>
                <div className='b1'>Settings</div>
                </div>
            </button>
            <div className='sidepanel3'>
            <button className='logout' onClick={handleHome}>
                <div className='btn1'>
                <div className='i1'><LogOut/></div>
                <div className='b1'>Logout</div>
                </div>
            </button>
            </div>
           </div>
           <div class="content2">
              {/* <h2>User Dashboard Content</h2> */}
              {sam?(<Admin/>):(<></>)}
               
           </div>
      </div>
      </>
    )
}
export default Dash;