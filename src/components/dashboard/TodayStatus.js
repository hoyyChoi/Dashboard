import React, { useRef, useEffect, useState } from 'react'
import TodayCard from './TodayCard'


//Comma Separator 
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};



const value = [
    //Number1
    {
        number1:numberWithCommas(3432332),
        number2:numberWithCommas(342132),
        number3:numberWithCommas(34132)
    },
    //Number2
    {
        number1:6546653,
        number2:3432546,
        number3:3445354
    },
    //Number3
    {
        number1:1564,
        number2:3434,
        number3:656465
    },
]
            


const TodayStatus = () => {

    const hello = [
        {
            firstNum:numberWithCommas(1000),
            secondNum:numberWithCommas(2000),
            thirdNum:numberWithCommas(3000),
        },
        {
            firstNum:1320,
            secondNum:234200,
            thirdNum:303420,
        },
        {
            firstNum:1340,
            secondNum:434000,
            thirdNum:3340,
        },
    ];
    const [number, setNumber] = React.useState(0);

    function increase() {
        number < hello.length-1 && setNumber((old) => old + 1);
        console.log(hello)
    }

    const imgVector = {
        blueVector: 'blue_vector.svg',
        redVector: 'red_vector.svg'
    }
    const data1= {
        title:"방문자",
        number1:numberWithCommas(34242343),
        number2:numberWithCommas(174),
        number3:numberWithCommas(89)
    };
    const data2= {
        title:"영상 조회",
        number1:numberWithCommas(3921243),
        number2:numberWithCommas(90),
        number3:numberWithCommas(12)
    };
    const data3= {
        title:"신규 가입자",
        number1:numberWithCommas(7654554),
        number2:numberWithCommas(132),
        number3:numberWithCommas(69)
    };

    

return (
    <div className='todayStatus'>
        <div className='status-header'>
            <header>
                <div className='status-header-left'>
                    <div style={{fontSize:'16px',marginRight:'9px',fontWeight:'500',lineHeight:'24px'}}>오늘의 현황</div>
                    <div style={{fontSize:'8px',border:' 0.8px solid #2F384A',width:'34px',height:'16px',borderRadius:'9px',fontWeight:'500',margin:'auto'}}><div style={{zoom:'0.8',textAlign:'center',margin:'1.2px 0'}}>실시간</div></div>
                </div>
                <div className='status-header-right'>
                    <img onClick={increase} width={12} style={{cursor:'pointer'}} src='Sync.svg'/>
                    <div style={{fontSize:'14px',marginLeft:'4px',fontWeight:'500',lineHeight:'24px'}}>2023년 3월 25일 12:00 기준</div>
                </div>
            </header>
        </div>
        <div className='status-card'>
            <div className='card1'>
                <TodayCard
                title={data1.title} number1={hello[number].firstNum} number2={data1.number2} number3={data1.number3} vector={imgVector.redVector}>
                </TodayCard>
            </div>
            <div className='card2'>
                <TodayCard vector={imgVector.redVector}
                title={data2.title} number1={hello[number].secondNum} number2={data2.number2} number3={data2.number3} >
                </TodayCard>
            </div>
            <div className='card3'>
                <TodayCard 
                title={data3.title} number1={hello[number].thirdNum} number2={data3.number2} number3={data3.number3} >
                </TodayCard>
            </div>
        </div>
    </div>
  )
}

export default TodayStatus