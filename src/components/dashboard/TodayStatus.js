import React from 'react'
import TodayCard from './TodayCard'



//Comma Separator 
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const randNumber = () => {

}


const TodayStatus = () => {
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
                    <img width={12} style={{cursor:'pointer'}} src='Sync.svg' />
                    <div style={{fontSize:'14px',marginLeft:'4px',fontWeight:'500',lineHeight:'24px'}}>2023년 3월 25일 12:00 기준</div>
                </div>
            </header>
        </div>
        <div className='status-card'>
            <div className='card1'>
                <TodayCard
                title={data1.title} number1={data1.number1} number2={data1.number2} number3={data1.number3}>
                </TodayCard>
            </div>
            <div className='card2'>
                <TodayCard 
                title={data2.title} number1={data2.number1} number2={data2.number2} number3={data2.number3}>
                </TodayCard>
            </div>
            <div className='card3'>
                <TodayCard 
                title={data3.title} number1={data3.number1} number2={data3.number2} number3={data3.number3}>
                </TodayCard>
            </div>
        </div>
    </div>
  )
}

export default TodayStatus