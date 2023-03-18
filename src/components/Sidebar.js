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
                            <div style={{display:'flex',alignItems:'center'}}>
                                <img className='icon' width={20} height={20} style={{marginRight:'5px',fill:'blue'}} src={menu[1]}/>
                                <div>{menu[0]}</div>
                            </div>
                            <div>+</div>
                        </div>
                    </li>
                )})}
            </div>
            <div className='toggle'>토글?(굳이)</div>
        </div>
  )
}

export default Sidebar




