import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';
import { getrealtime } from '../../remote/server';

const Live = () => {

    const [data,setData] = useState({});

    useEffect(() => {
        getrealtime()
        .then(res => {
            setData(res.data)
        })
    })


    const [open, setOpen] = useState(false);

    //live일때 
    const [live, setLive] = useState(true);

  return (

    <div>
        <div className={open ? 'liveOpen':'liveClose'}>
            <header onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}>
                <div style={{display:'flex',alignItems:'center'}}>Live<div className='circle'></div></div>
                <div  style={{display:'flex',alignItems:'center'}}><img src={open ? 'Arrow1.svg':'Arrow2.svg'}/></div>
                {/* <div  style={{display:'flex',alignItems:'center'}}><img src={open ? 'Arrow1.svg':'Arrow2.svg'}/></div> */}
            </header>
        </div>
        <Collapse in={open}>
            {live?             
            <div id="example-collapse-text">
                <div className='thumbnail'>
                    <img src={data.thumbnail}/>
                </div>
                <div className='header'>
                    <div className='title'>{data.title}</div>
                    <div className='option'>
                        <div>유정현 {data.people}명 시청 중</div>
                        <div>{data.startTime} ~ {data.endTime}</div>
                    </div>
                </div>
                
            </div>
            :
            <div id="example-collapse-text">
            <div className='noLiveheader'>
                <div className='noLive'>
                진행 중인 라이브가 없습니다.
                </div>
            </div>
        </div>
            }
        </Collapse>
    </div>
  )
}

export default Live