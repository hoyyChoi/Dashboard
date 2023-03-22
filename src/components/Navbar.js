import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {



  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img width={183} height={30} src='MEDIFLIX.svg'/>
            <label style={{position:'relative' , boxShadow: '0px 2px 5px rgba(38, 51, 77, 0.03)'}}>
                <input type='text' placeholder='리포트 검색' required/>
                <img width={20} height={20} style={{position:'absolute',top:'10px',right:'20px',cursor:'pointer'}} src='Search.svg'/>
            </label>
        </div>
        <div className='navbar-right'>
            <div className='setting'>
                <div style={{position:'relative'}}>
                    <img width={20} height={20} style={{cursor:'pointer'}} src='Bell.svg'/>
                    <div className="alarm">3</div>
                </div>
                <img width={20} height={20} style={{cursor:'pointer'}} src='Setting.svg'/>
                <img width={20} height={20} style={{cursor:'pointer'}} src='download.svg'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar