import React from 'react'
import TodayStatus from './dashboard/TodayStatus'
import Video from './dashboard/Video'
import UserInfo from './dashboard/UserInfo'
import UserTraffic from './dashboard/UserTraffic'

const Dashboard = ({setActive,count,setCount}) => {

   


  return (
    <div className="dashboard">
        <TodayStatus setActive={setActive} count={count} setCount={setCount}/>
        <Video />
        <div className='user'>
          <UserTraffic/>
          <UserInfo/>
        </div>
    </div>
  )
}

export default Dashboard

