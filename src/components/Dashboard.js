import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Exitems from './Exitems';

const Dashboard = () => {

    const navigate = useNavigate()


  return (
    <div id="page-content">
        <div className='navbar'>
            <img src='MEDIFLIX.svg'/>
            <div className='navbar-btn'>
                <Button className='button' variant="danger" size="sm">미리보기</Button>
                <Button className='button' variant="danger" size="sm" onClick={()=>navigate('/login')}>나가기</Button>
            </div>
        </div>
        <div className='main-dashboard'>
            <h1>대시보드 구현</h1>
            <div className='EX-container'>
                <Exitems/>
                <Exitems/>
                <Exitems/>
                <Exitems/>
                <Exitems/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

