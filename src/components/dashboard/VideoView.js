import React, { useEffect,useState} from 'react'
import VideoWatching from './VideoWatching'
import { getTopthree,getLiveTopthree} from '../../remote/server'

const VideoView = ({btn1}) => {

  const imgData = {
    thumbnail1: "VideoImage1.png",
    thumbnail2: "VideoImage2.png",
    thumbnail3: "VideoImage3.png",
  }

  const [data,setData] = useState([])

  useEffect(()=>{
    if(!btn1){
      getTopthree()
      .then(res=>{
        console.log(res.data.videoData)
        setData(res.data.videoData)
      }).catch(err=>console.log(err))
    }else{
      getLiveTopthree()
      .then(res=>{
        console.log(res.data.liveData)
        setData(res.data.liveData)
      }).catch(err=>console.log(err))
    }
  },[btn1])

  return (
    <div className='video-view'>
        <div className='VideoTitle'>
          콘텐츠 조회
          <div className='top'>TOP3</div>
        </div>
        <div>
            <VideoWatching thumbnail={imgData.thumbnail1} data={data[0]} btn1={btn1}/>
            <VideoWatching thumbnail={imgData.thumbnail2} data={data[1]} btn1={btn1}/>
            <VideoWatching thumbnail={imgData.thumbnail3} data={data[2]} btn1={btn1}/>

       
  
        </div>
    </div>
  )
}

export default VideoView