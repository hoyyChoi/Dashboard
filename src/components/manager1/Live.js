import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const Live = () => {

    const [open, setOpen] = useState(false);


  return (
    <div>
        <div className={open ? 'liveOpen':'liveClose'}>
            <header onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}>
                <div style={{display:'flex',alignItems:'center'}}>Live<div className='circle'></div></div>
                <div  style={{display:'flex',alignItems:'center'}}><img src={open ? 'Arrow1.svg':'Arrow2.svg'}/></div>
            </header>
        </div>
        <Collapse in={open}>
            <div id="example-collapse-text">
                <div className='thumbnail'></div>
                <div className='header'>
                    <div className='title'>척추 퇴행 질환과 치료 Part.2</div>
                    <div className='option'>
                        <div>유정현 3000명 시청중</div>
                        <div>13:00 ~ 14:30</div>
                    </div>
                </div>
                
            </div>
        </Collapse>
    </div>
  )
}

export default Live