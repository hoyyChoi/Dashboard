import React from 'react'
import Connector from './Connector'

const ConnectManager = ({setOpen}) => {

   const openChat = ()=>{
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
        </div>
    </div>
  )
}

export default ConnectManager