import React, { useState } from 'react'
import Connector from './Connector'

const ConnectManager = ({setOpen,memoCount,appear,setAppear}) => {


  const openChat = ()=>{
      setAppear(false)
      setOpen(true)
  }

  const img= {
    img1: 'Connector1.png',
    img2: 'Connector2.png',
    img3: 'Connector3.png',
    img4: 'Connector4.svg',
    default: 'smile.svg',
 } 

   
   

  return (
    <div className='connectManager'>
        <Connector id="connect1" connector={img.img1}>
        </Connector>

        <Connector id="connect2" connector={img.img2}>
        </Connector>

        <Connector id="connect3" connector={img.img3}>
        </Connector>

        <Connector id="connect4" connector={img.img4}>
        </Connector>
  
        <div className='messanger'>
            <img onClick={openChat} src='Chat.svg'/>
            {appear?<div className="alarm">{memoCount}</div>:<></>}
        </div>
    </div>
  )
}

export default ConnectManager