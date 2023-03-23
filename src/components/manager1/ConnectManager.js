import React, { useState } from 'react'
import Connector from './Connector'

const ConnectManager = ({setOpen,memoCount,appear,setAppear}) => {


   const openChat = ()=>{
      setAppear(false)
      setOpen(true)

   }
   
   

  return (
    <div className='connectManager'>
        <Connector/>
        <Connector/>
        <Connector/>
        <Connector/>
        <div className='messanger'>
            <img onClick={openChat} src='Chat.svg'/>
            {appear?<div className="alarm">{memoCount}</div>:<></>}
        </div>
    </div>
  )
}

export default ConnectManager