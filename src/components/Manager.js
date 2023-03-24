import React,{useState} from 'react'
import ConnectManager from './manager1/ConnectManager'
import Live from './manager1/Live'
import ManagerInfo from './manager1/ManagerInfo'
import Ranking from './manager1/Ranking'
import Upload from './manager1/Upload'
import NotePad from './manager1/NotePad'

const Manager = () => {

  const [open,setOpen] = useState(false)
  const [appear,setAppear] = useState(true)
  const [memolist,setMemolist] = useState([
    {img:'Connector1.png',
     name:'신형만',
     time:'1시간전',
     num:3,
     memo:'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    },
    {img:'Connector2.png',
     name:'봉미선',
     time:'2시간전',
     num:2,
     memo:'오늘 오전 중으로 자료 넘겨드릴게 '
    },
    {img:'Connector3.png',
     name:'신짱구',
     time:'2시간전',
     num:0,
     memo:'어쩌고 저쩌고 해서 연락드립니다!!!!'}
    ])
  const [memoCount,setMemoCount] = useState(memolist.length)

  return (
    <div className='manager'>
        {open
        ?<NotePad setOpen={setOpen} memolist={memolist} setMemolist={setMemolist}/>
        :<><ManagerInfo />
          <div className='rankConnect'>
              <Ranking/>
              <ConnectManager setOpen={setOpen} memoCount={memoCount} appear={appear} setAppear={setAppear}/>
          </div>
          <Live/>
          <Upload/></>}
    </div>
  )
}

export default Manager