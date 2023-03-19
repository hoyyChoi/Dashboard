import React from 'react'
import Connector from './Connector'

const ConnectManager = () => {

    const chan = false

  return (
    <div className='connectManager'>
        <Connector/>
        <Connector/>
        <Connector/>
        <Connector/>
        <div className='messanger'>
            <img src='Chat.svg'/>
        </div>
    </div>
  )
}

export default ConnectManager