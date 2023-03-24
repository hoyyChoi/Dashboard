import React,{useEffect, useState}from 'react';
import ChartLine from './chart/ChartLine';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ko } from "date-fns/esm/locale"; 
import moment from "moment";
import styled from 'styled-components';
import Collapse from 'react-bootstrap/Collapse';
import {postPageViews,postUv} from '../../remote/server'

const UserTraffic = () => {
    const [open,setOpen] = useState(false)
    const [btn,setBtn] = useState(1);
    const [UVbtn,setUVBtn] = useState(1);
    const [selected, setSelected] = useState('페이지뷰');

    const [value, onChange] = useState(new Date());
    const [mindate, setMinDate] = useState(new Date(2023,2,2));
    const [maxdate, setMaxDate] = useState(new Date(2023,2,31));
    const [today,setToday] = useState(moment(value).format("YYYY년 MM월 DD일"))
    const [date,setDate] = useState(moment(value).format("YYYY-MM-DD"))
    const [data,setData] = useState([])


    const clickDay = (value)=>{

        
        setToday(moment(value).format("YYYY년 MM월 DD일"))
        setDate(moment(value).format("YYYY-MM-DD"))


        setTimeout(() => {setOpen(false)}, 10); 
        // 이거 라이브러리가 거지라 선택된거 날짜 다음에 캘린더 켰을때 적용시켜져 있으려면 0.01초 있다가 닫아야하네요~
    }

    useEffect(()=>{
        if(selected === '페이지뷰'){
            postPageViews({category:btn,date:date})
            .then(res=>{
                setData(res.data.result)
            })
            .catch((err)=>console.log(err));
        }else{
            postUv({date:date})
            .then(res=>{
                setData(res.data.result)
            })
            .catch((err)=>console.log(err));
        }      

    },[btn,date,selected])

  return (
    <div className='userTraffic'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div style={{fontWeight:'500',fontSize:'16px'}}>유저 트래픽</div>
                </div>
                <div className='status-header-right'>
                    <div style={{fontSize:'14px',fontWeight:'500',lineHeight:'24px',display:'flex'}}>
                        <div>{today}</div>
                        <img width={15} style={{marginLeft:'9px',cursor:'pointer'}} onClick={()=>setOpen((open)=>!open)} src='Calendar.svg'/>
                    </div>
                </div>
            </header>
        </div>
        <div style={{display:'flex',position:'relative'}}>
        {open?<Container>
            <Calendar
                onChange={onChange}
                value={value}
                minDate={mindate}
                maxDate={maxdate}
                onClickDay={clickDay}
                goToRangeStartOnSelect={true}
                formatDay={(locale, date) => moment(date).format("DD")}
                locale="ko"
                showNeighboringMonth={false}
                />
        </Container>:''}
            <ChartLine data={data} btn={btn} setBtn={setBtn} UVbtn={UVbtn} setUVBtn={setUVBtn} selected={selected} setSelected={setSelected}/>
        </div>
    </div>
  )
}

export default UserTraffic

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 564px;

`;
//달력 온클릭 이벤트 넣어야함. 달력은 라이브러리로..


