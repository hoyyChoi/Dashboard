import React from 'react'
import styled from 'styled-components';
import { Card, Title, AreaChart } from "@tremor/react";
import { Dropdown } from 'react-dropdown-now';


const ChartLine = ({data,btn,setBtn,UVbtn,setUVBtn,selected,setSelected}) => {


    const handleSelect = (e) => {

      if(e.value === '페이지뷰'){
        setSelected('페이지뷰')
      }else if(e.value === 'UV'){
        setSelected('UV')
      }
  };

  const selectButton = (num) =>{
    setBtn(num)
  }

  const selectUVButton = (num) =>{
    setUVBtn(num)
  }


  return (
    <div>
      <Container >
          {selected!=='페이지뷰'
          ?<Card>
          <Title style={{display:'flex',justifyContent:'space-between'}}>
            <div></div>
            <Dropdown className='info-dropdown'
            placeholder="Select an option"
            options={['페이지뷰','UV']}
            value={selected}
            onChange={handleSelect}
            />
          </Title>
          <AreaChart
            className="h-64"
            data={data}
            index="d"
            categories={UVbtn===1?["UV","재방문"]:["신규방문율","재방문율"]}
            colors={["blue",'orange']}
            showLegend={true}
            showGridLines={false}
            showGradient={true}
            showAnimation={true}
          />
            </Card>
            :
            <Card>
          <Title style={{display:'flex',justifyContent:'space-between'}}>
            <div></div>
            <Dropdown className='info-dropdown'
            placeholder="Select an option"
            options={['페이지뷰','UV']}
            value={selected}
            onChange={handleSelect}
            />
          </Title>
          <AreaChart
            className="h-64"
            data={data}
            index="d"
            categories={["페이지뷰"]}
            colors={["blue"]}
            showLegend={true}
            showGridLines={false}
            showGradient={true}
            showAnimation={true}
          />
            </Card>}
        </Container>
        {selected !=='페이지뷰'
        ?<div className='chartline-button'>
          <button style={{width:'84px'}} className={UVbtn===1?'chart-button selectBtn':'chart-button'} onClick={()=>selectUVButton(1)}>수치 보기</button>
          <button style={{width:'84px'}} className={UVbtn===2?'chart-button selectBtn':'chart-button'} onClick={()=>selectUVButton(2)}>비율 보기</button>
        </div>
        :<div className='chartline-button'>
          <button style={{width:'93px'}} className={btn===1?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(1)}>ORIGINAL</button>
          <button style={{width:'59px'}} className={btn===2?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(2)}>VOD</button>
          <button style={{width:'104px'}} className={btn===3?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(3)}>DRUG INFO</button>
          <button style={{width:'57px'}} className={btn===4?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(4)}>LIFE</button>
        </div>}
    </div>
  )
}

export default ChartLine

const Container = styled.div`
  width: 564px;
`;







// const chartdata = [
//   {
//     d:0,
//     date: "12일",
//     "액티브 유저": 190,
//     "전체 회원수": 200,
//     "이탈 회원수": 90,
//   },
//   {
//     d:0,
//     date: "13일",
//     "액티브 유저": 420,
//     "전체 회원수": 300,
//     "이탈 회원수": 103,
//   },
//   {
//     d:0,
//     date: "14일",
//     "액티브 유저": 140,
//     "전체 회원수": 510,
//     "이탈 회원수": 10,
//   },
//   {
//     d:0,
//     date: "15일",
//     "액티브 유저": 350,
//     "전체 회원수": 530,
//     "이탈 회원수": 80,
//   },
//   {
//     d:0,
//     date: "16일",
//     "액티브 유저": 300,
//     "전체 회원수": 520,
//     "이탈 회원수": 50,
//   },
//   {
//     d:0,
//     date: "17일",
//     "액티브 유저": 200,
//     "전체 회원수": 470,
//     "이탈 회원수": 120,
//   },
//   {
//     d:0,
//     date: "18일",
//     "액티브 유저": 500,
//     "전체 회원수": 600,
//     "이탈 회원수": 30,
//   },
//   {
//     d:0,
//     date: "19일",
//     "액티브 유저": 230,
//     "전체 회원수": 560,
//     "이탈 회원수": 50,
//   },
//   {
//     d:0,
//     date: "20일",
//     "액티브 유저": 500,
//     "전체 회원수": 550,
//     "이탈 회원수": 150,
//   },
//   {
//     d:0,
//     date: "21일",
//     "액티브 유저": 340,
//     "전체 회원수": 510,
//     "이탈 회원수": 200,
//   },
//   {
//     d:0,
//     date: "22일",
//     "액티브 유저": 400,
//     "전체 회원수": 500,
//     "이탈 회원수": 110,
//   },
//   {
//     d:0,
//     date: "23일",
//     "액티브 유저": 200,
//     "전체 회원수": 300,
//     "이탈 회원수": 80,
//   }
// ];
