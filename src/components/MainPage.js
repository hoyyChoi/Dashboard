import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

const MainPage = () => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default MainPage


