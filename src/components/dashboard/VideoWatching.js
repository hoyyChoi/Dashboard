import React from 'react'

const VideoWatching = (props) => {


  return (
    <div className='pre-video'>
        <div className='video-thumbnail'>
          <img id="video-img" src={props.thumbnail}></img>
        </div>
        <div style={{position:'relative'}}>
          <div className='video-title'>
              <div className='video-name'>척추닥터 김사부</div>
              <div style={{display:'flex'}}>
                <div className='video-status'>28만회 </div>
                <div className='video-date'>2023.01.02</div>
              </div>
          </div>
          <div className='video-tags'>
            <div className='tag-items'>내과</div>
            <div className='tag-items'>과자</div>
            <div className='tag-items'>50대</div>
          </div>
        </div>
    </div>
  )
}

export default VideoWatching