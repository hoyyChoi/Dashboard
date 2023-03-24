import React,{useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';

const Sidebar = () => {

    const sidemenu = [['대시보드','Home.svg'], ['분석&통계','Analysis.svg'], ['관리','Manage.svg'], ['고객문의','Chatlist.svg'], ['기본설정','Settinglist.svg']]
    const [open, setOpen] = useState(false);
    const [menuNum,setMenuNum] = useState(0)

    const selectMenu = (idx)=>{
        setMenuNum(idx)
    }   

    
  return (
        <div id="sidebar-wrapper">
            <div className="sidebar-nav">
                {sidemenu.map((menu,idx)=>{
                    return (
                    <li onClick={()=>selectMenu(idx)} className={idx === menuNum ? 'selectMenu':''}>
                        <div className='menu'>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <img className='icon' width={20} height={20} style={{marginRight:'5px',fill:'blue'}} src={menu[1]}/>
                                <div>{menu[0]}</div>
                            </div>
                            <div><img src={idx === menuNum ? 'Arrow1.svg':'Arrow2.svg'}/></div>
                        </div>
                    </li>
                )})}
            </div>
            <div className='toggle'></div>
        </div>
  )
}

export default Sidebar




