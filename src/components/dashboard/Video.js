import React,{useState,useEffect} from 'react'
import VideoView from './VideoView'
import VideoAnalysis from './VideoAnalysis'
import {getTopdepartment,getTopdisease,getNonmedical,getLiveTopdepartment,getLiveTopdisease} from '../../remote/server'

const Video = () => {

    const [btn1,setBtn1] = useState(false)
    const [selected, setSelected] = useState('진료');
    const [btn,setBtn] = useState(1);
    const [sum,setSum] = useState(0);
    const [analy,setAnaly] = useState({label:[],datasets:[]})
    const [data,setData] = useState([])


    let sub = []
  let hit = []
  let sumvalue = 0


  useEffect(()=>{
    if(btn1){
        if(btn === 1){
            getLiveTopdepartment()
            .then(res=>{
            const arr = res.data
            arr.map((item)=>{
                sub.push(item.subject)
                hit.push(item.hits)
            })
            setData([{
                data: hit,
                backgroundColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
                ],
                borderColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
                ],
                borderWidth: 1
            }])
                hit.map((item)=>{
                sumvalue += parseFloat(item)
                })
                setSum(Math.ceil(sumvalue * 100) / 100)
                setAnaly((analy)=>{
                return{
                    labels:sub,
                    datasets:data
                }
                })
            })
            .catch((err)=>console.log(err));
        }else if(btn === 2){
            getLiveTopdisease()
            .then(res=>{
            const arr = res.data
            arr.map((item)=>{
                sub.push(item.subject)
                hit.push(item.hits)
            })
            setData([{
                data: hit,
                backgroundColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
                ],
                borderColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
                ],
                borderWidth: 1
            }])
                hit.map((item)=>{
                sumvalue += parseFloat(item)
                })
                setSum(Math.ceil(sumvalue * 100) / 100)
                setAnaly((analy)=>{
                return{
                    labels:sub,
                    datasets:data
                }
                })
            })
            .catch((err)=>console.log(err));
        }
    }else{
        if(selected === '진료'){
            if(btn === 1){
              getTopdepartment()
              .then(res=>{
                const arr = res.data
                arr.map((item)=>{
                  sub.push(item.subject)
                  hit.push(item.hits)
               })
               
              setData([{
                data: hit,
                backgroundColor: [
                  'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
                ],
                borderColor: [
                  'rgba(51, 97, 255, 1.0)',
                  'rgba(51, 97, 255, 0.8)',
                  'rgba(51, 97, 255, 0.6)',
                  'rgba(51, 97, 255, 0.4)',
                  'rgba(51, 97, 255, 0.2)',
                  'rgba(107,122,153, 0.9)'
                ],
                borderWidth: 1
              }])
                hit.map((item)=>{
                  sumvalue += parseFloat(item)
                })
                setSum(Math.ceil(sumvalue * 100) / 100)
                setAnaly((analy)=>{
                  return{
                    labels:sub,
                    datasets:data
                  }
                })
            })
            .catch((err)=>console.log(err));
          }else if(btn === 2){
            getTopdisease()
            .then(res=>{
              const arr = res.data
              arr.map((item)=>{
                sub.push(item.subject)
                hit.push(item.hits)
             })
             
            setData([{
              data: hit,
              backgroundColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
              ],
              borderColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
              ],
              borderWidth: 1
            }])
              hit.map((item)=>{
                sumvalue += parseFloat(item)
              })
              setSum(Math.ceil(sumvalue * 100) / 100)
              setAnaly((analy)=>{
                return{
                  labels:sub,
                  datasets:data
                }
              })
          })
          .catch((err)=>console.log(err));
          }
          }else{
            getNonmedical()
            .then(res=>{
              const arr = res.data
              arr.map((item)=>{
                sub.push(item.subject)
                hit.push(item.hits)
             })
             
            setData([{
              data: hit,
              backgroundColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
              ],
              borderColor: [
                'rgba(51, 97, 255, 1.0)',
                'rgba(51, 97, 255, 0.8)',
                'rgba(51, 97, 255, 0.6)',
                'rgba(51, 97, 255, 0.4)',
                'rgba(51, 97, 255, 0.2)',
                'rgba(107,122,153, 0.9)'
              ],
              borderWidth: 1
            }])
              hit.map((item)=>{
                sumvalue += parseFloat(item)
              })
              setSum(Math.ceil(sumvalue * 100) / 100)
              setAnaly((analy)=>{
                return{
                  labels:sub,
                  datasets:data
                }
              })
          })
          .catch((err)=>console.log(err));
          }
          
      
          
    }
  },[data,selected])
    
  return (
    <div className='videoStatus'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div className={btn1?'video':'select'} onClick={() => setBtn1(false)}>영상</div>
                    <div className={btn1?'select':'live'} onClick={() => setBtn1(true)}>라이브</div>
                </div>
                <div className='status-header-right'>
                    <div style={{fontSize:'14px',marginLeft:'4px',fontWeight:'500',lineHeight:'24px'}}>2023년 3월 기준</div>
                </div>
            </header>
        </div>
            {btn?
            <div className='video-card'>
                <VideoView btn1={btn1}/>
                <VideoAnalysis selected={selected} setSelected={setSelected} btn={btn} setBtn={setBtn} analy={analy} sum={sum} btn1={btn1}/>
            </div>
            :
            <div className='video-card'>
                <VideoView btn1={btn1}/>
                <VideoAnalysis selected={selected} setSelected={setSelected} btn={btn} setBtn={setBtn} analy={analy} sum={sum} btn1={btn1}/>
            </div>}
    </div>
  )
}

export default Video