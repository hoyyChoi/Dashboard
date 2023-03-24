import React from 'react'

const VideoWatching = ({thumbnail,data,btn1}) => {


  return (
    <a href={data&&data.link}>
      <div className='pre-video'>
          <div className='video-thumbnail'>
            <img id="video-img" src={data&&data.thumbnail}></img>
          </div>
          <div style={{position:'relative'}}>
            <div className='video-title'>
                <div className='video-name'>{data&&data.title}</div>
                <div style={{display:'flex'}}>
                  <div className='video-status'>{data&&data.hit.toString().substr(0, 2)}만회  </div>
                  <div className='video-date'>  {data&&data.date}</div>
                </div>
            </div>
            <div className='video-tags'>
              <div className='tag-items'>{data&&data.length}</div>
              <div className='tag-items'>{data&&data.title.substr(2,4)}</div>
              <div className='tag-items'>{!btn1?data&&data.age:data&&data.title.substr(0,2)}</div>
            </div>
          </div>
      </div>
    </a>
  )
}

export default VideoWatching