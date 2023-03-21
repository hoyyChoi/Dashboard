import React from 'react'
import styled from 'styled-components';
import { Card, Title, AreaChart } from "@tremor/react";
import { useState } from 'react';



const chartdata = [
  {
    date: "12일",
    "액티브 유저": 190,
    "전체 회원수": 200,
    "이탈 회원수": 90,
  },
  {
    date: "13일",
    "액티브 유저": 420,
    "전체 회원수": 300,
    "이탈 회원수": 103,
  },
  {
    date: "14일",
    "액티브 유저": 140,
    "전체 회원수": 510,
    "이탈 회원수": 10,
  },
  {
    date: "15일",
    "액티브 유저": 350,
    "전체 회원수": 530,
    "이탈 회원수": 80,
  },
  {
    date: "16일",
    "액티브 유저": 300,
    "전체 회원수": 520,
    "이탈 회원수": 50,
  },
  {
    date: "17일",
    "액티브 유저": 200,
    "전체 회원수": 470,
    "이탈 회원수": 120,
  },
  {
    date: "18일",
    "액티브 유저": 500,
    "전체 회원수": 600,
    "이탈 회원수": 30,
  },
  {
    date: "19일",
    "액티브 유저": 230,
    "전체 회원수": 560,
    "이탈 회원수": 50,
  },
  {
    date: "20일",
    "액티브 유저": 500,
    "전체 회원수": 550,
    "이탈 회원수": 150,
  },
  {
    date: "21일",
    "액티브 유저": 340,
    "전체 회원수": 510,
    "이탈 회원수": 200,
  },
  {
    date: "22일",
    "액티브 유저": 400,
    "전체 회원수": 500,
    "이탈 회원수": 110,
  },
  {
    date: "23일",
    "액티브 유저": 200,
    "전체 회원수": 300,
    "이탈 회원수": 80,
  }
];

const ChartLine = () => {

  const [selected, setSelected] = useState(false);
  const [btn,setBtn] = useState(1);
    const handleSelect = (e) => {

      if(e.target.value === 'true'){
        setSelected(true)
      }else{
        setSelected(false)
      }
  };

  const selectButton = (num) =>{
    setBtn(num)
  }


  return (
    <div>
      <Container >
          {selected?<Card>
          <Title style={{display:'flex',justifyContent:'space-between'}}>
            <div></div>
            <select onChange={handleSelect} value={selected}>  
              <option value={false}>페이지뷰</option>
              <option value={true}>이탈률</option>                                        
            </select>
          </Title>
          <AreaChart
            className="h-64"
            data={chartdata}
            index="date"
            categories={["전체 회원수","이탈 회원수"]}
            colors={["blue",'orange']}
            showLegend={true}
            showGridLines={false}
            showGradient={true}
          />
            </Card>
            :
            <Card>
          <Title style={{display:'flex',justifyContent:'space-between'}}>
            <div></div>
            <select onChange={handleSelect} value={selected}>  
              <option value={false}>페이지뷰</option>
              <option value={true}>이탈률</option>                                        
            </select>
          </Title>
          <AreaChart
            className="h-64"
            data={chartdata}
            index="date"
            categories={["액티브 유저"]}
            colors={["blue"]}
            showLegend={true}
            showGridLines={false}
            showGradient={true}
          />
            </Card>}
        </Container>
        {selected?"":<div className='chartline-button'>
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


