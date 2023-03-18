import React from 'react'
import ChartLine from './chart/ChartLine'

const UserTraffic = () => {
  return (
    <div className='userTraffic'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div style={{fontWeight:'500',fontSize:'16px'}}>유저 트래픽</div>
                </div>
                <div className='status-header-right'>
                    <div style={{fontSize:'14px',fontWeight:'500',lineHeight:'24px'}}>
                        2023년 3월 25일
                        <img width={15} style={{marginLeft:'9px',cursor:'pointer'}}src='Calendar.svg'/>
                    </div>
                </div>
            </header>
        </div>
        <ChartLine/>
    </div>
  )
}

export default UserTraffic


//달력 온클릭 이벤트 넣어야함. 달력은 라이브러리로..