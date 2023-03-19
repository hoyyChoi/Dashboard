import React from 'react'
import VideoWatching from './VideoWatching'

const VideoView = () => {
  return (
    <div className='video-view'>
        <div className='title'>콘텐츠 조회수 <div className='top'>TOP3</div></div>
        <div>
            <VideoWatching/>
            <VideoWatching/>
            <VideoWatching/>
        </div>
    </div>
  )
}

export default VideoView