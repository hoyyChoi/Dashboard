import React,{useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';

const Sidebar = () => {

    const sidemenu = [['대시보드','Home.svg'], ['분석&통계','Analysis.svg'], ['관리','Manage.svg'], ['고객문의','Chatlist.svg'], ['기본설정','Settinglist.svg']]
    const [open, setOpen] = useState(false);

    
  return (
        <div id="sidebar-wrapper">
            <div className="sidebar-nav">
                {sidemenu.map((menu)=>{
                    return (
                    <li onClick={() => setOpen(!open)}>
                        <div className='menu'>
                            <div style={{display:'flex'}}>
                                <img className='icon' width={30} height={30} style={{marginRight:'16px',fill:'blue'}} src={menu[1]}/>
                                <div style={{marginTop:'2.5px'}}>{menu[0]}</div>
                            </div>
                            <div style={{marginTop:'2.5px'}}>+</div>
                        </div>
                    </li>
                )})}
            </div>
        </div>
  )
}

export default Sidebar




