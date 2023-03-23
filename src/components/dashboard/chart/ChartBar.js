import React,{useEffect, useState} from 'react'
import { Title } from "@tremor/react";
import DetailBar from './DetailBar';
import styled from 'styled-components';
import {getFunnels,getDepartment,getAge,getRegion} from '../../../remote/server'



const ChartBar = () => {

  const [userInfo,setUserInfo] = useState([]);


  const [selected, setSelected] = useState('유입경로');
  const handleSelect = (e) => {

    if(e.target.value === '유입경로'){
      setSelected('유입경로')
    }else if(e.target.value === '진료과'){
      setSelected('진료과')
    }else if(e.target.value === '연령대'){
      setSelected('연령대')
    }else if(e.target.value === '지역별'){
      setSelected('지역별')
    }
  };

  useEffect(()=>{
    if(selected === '유입경로'){
      getFunnels()
      .then(res=>{
        setUserInfo(res.data)
      })
      .catch((err)=>console.log(err))
    }else if(selected === '진료과'){
      getDepartment()
      .then(res=>{
        setUserInfo(res.data)
      })
      .catch((err)=>console.log(err))
    }else if(selected === '연령대'){
      getAge()
      .then(res=>{
        setUserInfo(res.data)
      })
      .catch((err)=>console.log(err))
    }else if(selected === '지역별'){
      getRegion()
      .then(res=>{
        setUserInfo(res.data)
      })
      .catch((err)=>console.log(err))
    }

    
  },[selected])

  return (
    <div>
      <Container>
        <Title style={{display:'flex',justifyContent:'space-between',marginRight:'34px'}}>
            <div></div>
            <select onChange={handleSelect} value={selected}>  
              <option value={'유입경로'}>유입경로</option>
              <option value={'진료과'}>진료과</option>
              <option value={'연령대'}>연령대</option>
              <option value={'지역별'}>지역별</option>                                          
            </select>
          </Title>
          <DetailBar data={userInfo} selected={selected}/>
          {/* {selected==='유입경로'
          ?<DetailBar data={funnels}/>
          :(selected==='진료과'
            ?<DetailBar data={medical}/>
            :(selected==='연령대'
              ?<DetailBar data={age}/>
              :(<DetailBar data={area}/>)))} */}
      </Container>
    </div>
  )
}

export default ChartBar

const Container = styled.div`
  width: 270px;
  margin: auto;
  margin-top: 12.8px;
`;




// const inflow =[[80,'네이버 검색'],[50,'지인추천'],[45,'tv광고'],[30,'구글검색'],[10,'기타'],[7,'sns']];
// const medical =[[90,'내과'],[80,'성형외과'],[55,'비뇨기과'],[50,'기타'],[30,'산부인과'],[10,'외과']];
// const age =[[80,'30대'],[50,'60대'],[45,'40대'],[30,'50대'],[20,'20대'],[10,'70대이상']];
// const area =[[50,'경기'],[40,'경상'],[30,'서울'],[20,'충청'],[10,'전라'],[5,'기타']];
    
