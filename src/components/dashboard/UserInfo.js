import React from 'react'
import ChartBar from './chart/ChartBar'

const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div style={{fontWeight:'500',fontSize:'16px'}}>유저 정보</div>
                </div>
            </header>
        </div>
        <ChartBar/>
    </div>
  )
}

export default UserInfo