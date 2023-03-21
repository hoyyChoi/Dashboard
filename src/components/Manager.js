import React,{useState} from 'react'
import ConnectManager from './manager1/ConnectManager'
import Live from './manager1/Live'
import ManagerInfo from './manager1/ManagerInfo'
import Ranking from './manager1/Ranking'
import Upload from './manager1/Upload'
import NotePad from './manager1/NotePad'

const Manager = () => {

  const [open,setOpen] = useState(false)

  return (
    <div className='manager'>
        {open
        ?<NotePad setOpen={setOpen}/>
        :<><ManagerInfo />
          <div className='rankConnect'>
              <Ranking/>
              <ConnectManager setOpen={setOpen}/>
          </div>
          <Live/>
          <Upload/></>}
    </div>
  )
}

export default Manager