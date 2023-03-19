import React from 'react'
import ConnectManager from './manager1/ConnectManager'
import Live from './manager1/Live'
import ManagerInfo from './manager1/ManagerInfo'
import Ranking from './manager1/Ranking'
import Upload from './manager1/Upload'

const Manager = () => {
  return (
    <div className='manager'>
        <ManagerInfo />
        <div className='rankConnect'>
            <Ranking/>
            <ConnectManager/>
        </div>
        <Live/>
        <Upload/>
    </div>
  )
}

export default Manager