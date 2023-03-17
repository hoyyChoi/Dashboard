import React from 'react'
import ConnectManager from './manager/ConnectManager'
import Live from './manager/Live'
import ManagerInfo from './manager/ManagerInfo'
import Ranking from './manager/Ranking'
import Upload from './manager/Upload'

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