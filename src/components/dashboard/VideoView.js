import React from 'react'
import VideoWatching from './VideoWatching'

const VideoView = () => {
  return (
    <div className='video-view'>
        <div className='title'>콘텐츠 조회수 <div style={{color:'#ffffff',fontSize:'12px',fontWeight:'500',border:' 0.8px solid #2F384A',width:'48px',height:'24px',borderRadius:'10px',marginLeft:'10px',alignItems:'center',display:'flex',justifyContent:'center',backgroundColor:'#2F384A'}}>TOP3</div></div>
        <div>
            <VideoWatching/>
            <VideoWatching/>
            <VideoWatching/>
        </div>
    </div>
  )
}

export default VideoView