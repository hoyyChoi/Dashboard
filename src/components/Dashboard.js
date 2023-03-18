import React from 'react'
import TodayStatus from './dashboard/TodayStatus'
import Video from './dashboard/Video'
import UserInfo from './dashboard/UserInfo'
import UserTraffic from './dashboard/UserTraffic'

const Dashboard = () => {

   


  return (
    <div className="dashboard">
        <TodayStatus />
        <Video />
        <div className='user'>
          <UserTraffic/>
          <UserInfo/>
        </div>
    </div>
  )
}

export default Dashboard

