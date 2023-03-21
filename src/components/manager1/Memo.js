import React, { useState } from 'react'

const Memo = ({item}) => {

    const [btn,setBtn] = useState(false)
    const [num,setNum] = useState(item.num)
    
    const checkBtn = ()=>{
        if(btn === false){
            setBtn(true)
            setNum(num+1)
        }
        else{
            setBtn(false)
            setNum(num-1)
        }
    }

  return (
    <div className='memo-container'>
        <div className='memo-title'>
            <div className='left-memo-title'>
                <img src={item.img}/>
                <div className='name'>{item.name}</div>
                <div className='time'>{item.time}</div>
            </div>
            <div className='right-memo-title'>
                <div className={btn?'onCheck':'offCheck'} onClick={checkBtn}><img src='Check.svg'/></div>
                <div>{num}</div>
            </div>
        </div>
        <div className='memo-text'>
            {item.memo}
        </div>
    </div>
  )
}

export default Memo