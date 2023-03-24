import React,{useEffect, useState} from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Manager from './Manager'
import { getProfile } from '../remote/server'

const MainPage = () => {


  const [active,setActive] = useState(false)
  const [count,setCount] = useState(0)

 

  return (
    <div className='mainpage'>
      <Navbar active={active} count={count} />
      <Sidebar />
      <Dashboard setActive={setActive} count={count} setCount={setCount}/>
      <Manager />
    </div>
  )
}

export default MainPage


