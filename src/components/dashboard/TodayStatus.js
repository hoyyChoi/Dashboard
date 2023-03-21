import React, { useRef, useState } from 'react'
import TodayCard from './TodayCard'


//Comma Separator 
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


const TodayStatus = () => {

    const data = [
        {
            //index(number) == 0
            //방문자수
            firstNum1:numberWithCommas(3846),
            firstNum2:numberWithCommas(18045286),
            firstNum3:numberWithCommas(12083),


            //영상조회
            secondNum1:numberWithCommas(270000),
            secondNum2:numberWithCommas(3870000),
            secondNum3:numberWithCommas(350000),


            //가입자수
            thirdNum1:numberWithCommas(39),
            thirdNum2:numberWithCommas(24320),
            thirdNum3:numberWithCommas(5234),
        },
        {
            //index(number) == 1
            //방문자수
            firstNum1:numberWithCommas(4843),
            firstNum2:numberWithCommas(18049584),
            firstNum3:numberWithCommas(24095),


            //영상조회
            secondNum1:numberWithCommas(391200),
            secondNum2:numberWithCommas(4270000),
            secondNum3:numberWithCommas(121000),

            //가입자수
            thirdNum1:numberWithCommas(100),
            thirdNum2:numberWithCommas(24359),
            thirdNum3:numberWithCommas(6342),
        },
        {
            //index(number) == 2
            //방문자수
            firstNum1:numberWithCommas(6574),
            firstNum2:numberWithCommas(18515283),
            firstNum3:numberWithCommas(33095),


            //영상조회
            secondNum1:numberWithCommas(270000),
            secondNum2:numberWithCommas(4574300),
            secondNum3:numberWithCommas(304300),

            //가입자수
            thirdNum1:numberWithCommas(20),
            thirdNum2:numberWithCommas(24339),
            thirdNum3:numberWithCommas(6322),
        }
    ];

    const [number, setNumber] = React.useState(0);
    const [time, setTime] = React.useState(0);

    function syncFunction() {
        //random Value Index 
        setNumber(parseInt(Math.random() *  data.length));  
        
        //array Index++
        time < realTime.length-1 && setTime((old) => old + 1);
    }

    const img= {
        blueVector: 'blue_vector.svg',
        redVector: 'red_vector.svg',
        blueBar: 'BlueBarToday.svg',
        redBar: 'RedBarToday.svg'
    }

    const titleData = {
        title1:"방문자",
        title2:"영상 조회",
        title3:"신규 가입자",
    };

    const realTime = [

        { time: "2023년 3월 25일 12:00 기준" },
        { time: "2023년 3월 25일 18:00 기준" },
        { time: "2023년 3월 26일 00:00 기준" },
        { time: "2023년 3월 26일 06:00 기준" },
        { time: "2023년 3월 26일 12:00 기준" },
        { time: "2023년 3월 26일 18:00 기준" },
        { time: "2023년 3월 27일 00:00 기준" },
        { time: "2023년 3월 27일 06:00 기준" },
    ]


    

return (
    <div className='todayStatus'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div style={{fontSize:'16px',marginRight:'9px',fontWeight:'500',lineHeight:'24px'}}>오늘의 현황</div>
                    <div style={{fontSize:'8px',border:' 0.8px solid #2F384A',width:'34px',height:'16px',borderRadius:'9px',fontWeight:'500',margin:'auto'}}><div style={{zoom:'0.8',textAlign:'center',margin:'1.2px 0'}}>실시간</div></div>
                </div>
                <div className='status-header-right'>
                    <img onClick={syncFunction} width={12} style={{cursor:'pointer'}} src='Sync.svg'/>
                    <div style={{fontSize:'14px',marginLeft:'4px',fontWeight:'500',lineHeight:'24px'}}>{realTime[time].time}</div>
                </div>
            </header>
        </div>
        <div className='status-card'>
            <div className='card1'>
                <TodayCard
                title={titleData.title1} number1={data[number].firstNum1} number2={data[number].firstNum2} number3={data[number].firstNum3} vector={img.redVector} bar={img.redBar}>
                </TodayCard>
            </div>
            <div className='card2'>
                <TodayCard 
                title={titleData.title2} number1={data[number].secondNum1} number2={data[number].secondNum2} number3={data[number].secondNum3} vector={img.redVector} bar={img.redBar}>
                </TodayCard>
            </div>
            <div className='card3'>
                <TodayCard 
                title={titleData.title3} number1={data[number].thirdNum1} number2={data[number].thirdNum2} number3={data[number].thirdNum3} vector={img.blueVector} bar={img.blueBar}>
                </TodayCard>
            </div>
        </div>
    </div>
  )
}

export default TodayStatus