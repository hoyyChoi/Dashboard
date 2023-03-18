import React from 'react'
import TodayCard from './TodayCard'

const TodayStatus = () => {
  return (
    <div className='todayStatus'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div style={{fontSize:'16px',marginRight:'9px',fontWeight:'500',lineHeight:'24px'}}>오늘의 현황</div>
                    <div style={{fontSize:'8px',border:' 0.8px solid #2F384A',width:'34px',height:'16px',borderRadius:'9px',fontWeight:'500',margin:'auto'}}><div style={{zoom:'0.8',textAlign:'center',margin:'1.2px 0'}}>실시간</div></div>
                </div>
                <div className='status-header-right'>
                    <img width={12} style={{cursor:'pointer'}} src='Sync.svg' />
                    <div style={{fontSize:'14px',marginLeft:'4px',fontWeight:'500',lineHeight:'24px'}}>2023년 3월 25일 12:00 기준</div>
                </div>
            </header>
        </div>
        <div className='status-card'>
            <div className='card1'><TodayCard/></div>
            <div className='card2'><TodayCard/></div>
            <div className='card3'><TodayCard/></div>
        </div>
    </div>
  )
}

export default TodayStatus