import React from 'react'
import VideoWatching from './VideoWatching'

const VideoView = () => {
  return (
    <div className='video-view'>
        <div className='title'>콘텐츠 조회수 TOP3</div>
        <div>
            <VideoWatching/>
            <VideoWatching/>
            <VideoWatching/>
        </div>
    </div>
  )
}

export default VideoView