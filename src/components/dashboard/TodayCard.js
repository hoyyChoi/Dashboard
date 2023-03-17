import React from 'react'

const TodayCard = () => {

  return (
    <container>
        <div class="first">
            <div style={{fontSize:'14px',color: '#6B7A99',fontWeight:'500'}}>방문자수</div>
            <div style={{fontSize:'32px',color: '#2F384A',fontWeight:'500'}}>1,234</div>
        </div>
        <div className='AcCom'>
            <div className='accum'>
                <div style={{marginBottom:'6.5px'}}>3월 누적</div>
                <div>2321</div>
            </div>
            <div className='compare'>
                <div>2월 보다</div>
                <div className='updown'>5 +</div>
            </div>
        </div>
    </container>
  )
}

export default TodayCard