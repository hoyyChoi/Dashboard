import React,{useState} from 'react'
import VideoView from './VideoView'
import VideoAnalysis from './VideoAnalysis'

const Video = () => {

    const [btn,setBtn] = useState(false)
  return (
    <div className='videoStatus'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div className={btn?'video':'select'} onClick={() => setBtn(false)}>영상</div>
                    <div className={btn?'select':'live'} onClick={() => setBtn(true)}>라이브</div>
                </div>
                <div className='status-header-right'>
                    <div style={{fontSize:'14px',marginLeft:'4px',fontWeight:'500',lineHeight:'24px'}}>2023년 3월 기준</div>
                </div>
            </header>
        </div>
        <div className='video-card'>
            <VideoView/>
            <VideoAnalysis/>
        </div>
    </div>
  )
}

export default Video