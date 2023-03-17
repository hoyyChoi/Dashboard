import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Manager from './Manager'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Dashboard />
      <Manager />
    </div>
  )
}

export default MainPage


