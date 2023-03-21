
import React from 'react'

const TodayCard = (props) => {


return (
    <container>
        <div class="first">
            <div style={{fontSize:'14px',color: '#6B7A99',fontWeight:'500'}}>{props.title}</div>
            <div style={{fontSize:'32px',color: '#2F384A',fontWeight:'500'}}>{props.number1}</div>
        </div>
        <div className='AcCom'>
            <div className='accum'>
                <div style={{marginBottom:'6.5px'}}>3월 누적</div>
                <div>{props.number2}</div>
            </div>
            <div className="bar">
                    <img id="barRed" src={props.bar}></img>
            </div>
            <div className='compare'>
                <div className="title3">2월 보다</div>
                <div className='updown'>
                    <div className='number3'>{props.number3} </div>
                    <img id="UpVector" width={10} src={props.vector}></img>
                </div> 
            </div>
        </div>
    </container>
  )
}

export default TodayCard