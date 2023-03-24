import React, { useState,useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css'


ChartJS.register(ArcElement, Tooltip, Legend);


const VideoAnalysis = ({selected,setSelected,btn,setBtn,analy,sum,btn1}) => {


    const handleSelect = (e) => {

      if(e.value === '진료'){
        setSelected('진료')
      }else{
        setSelected('비진료')
      }
  };

  const selectButton = (num) =>{
    setBtn(num)
  }

  

  return (
    <div className='video-analysis'>
      <div className='title'>
        <div className='analysis-title'>
        조회수 분석
        </div>
        {!btn1?
        <Dropdown className='info-dropdown'
        options={['진료', '비진료']}
        value={selected}
        onChange={handleSelect}
      />:""}
      </div>


      <div className='doughnut'>
        <Doughnut 
            data={analy}
            options = {{
              layout: {
                padding: {
                  left:20,
                  right: -10,
                  top: 0,
                  bottom: 80
              },
              
              },
              
              responsive:true,
              maintainAspectRatio:true,
              plugins: {
                legend: {
                  display: true,
                  position: 'right',
                  rtl: false, 
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    // padding: 20,
                    padding:20
                  }
                },

              }
            }
      
            }
            />
            {selected ==='진료' || btn1 === true?
            <div>
              <div className='dough-text' >총 {sum}회</div>
              <div className='chartDough-button'>
                <button style={{width:'83px'}} className={btn===1?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(1)}>진료과별</button>
                <button style={{width:'63px'}} className={btn===2?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(2)}>질환별</button>
              </div>
            </div>
            :''}
      </div>
    </div>

  )
}

export default VideoAnalysis





  // //chart 내부 총 합 function
  // const drawInnerText = (chart) => {
  //     let ctx = chart.ctx;
  //     ctx.restore();
  //     const fontSize = (chart.height / 270).toFixed(2);
  //     ctx.font = fontSize + 'em sans-serif';
  //     ctx.textBaseline = 'middle';
  //     const dataArrValues = chart.config._config.data.datasets[0].data;
  //     const result = dataArrValues.reduce(function add(sum, currValue) {
  //       return sum+currValue;
  //     }, 0);
  //     let text = '총 ' + result + '회'
  //       // chart.tooltip._active.length > 0
  //       //   ? `${Math.round(
  //       //       (dataArrValues[chart.tooltip._active[0].datasetIndex] /
  //       //         dataArrValues.reduce((a, b) => a + b)) *
  //       //         100
  //       //     )}%`
  //       //   : `${Math.round(
  //       //       (dataArrValues[0] / dataArrValues.reduce((a, b) => a + b)) * 100
  //       //     )}%`;
  //     // let textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
  //     let textX = 42;
  //     let textY = 125;
  //     ctx.fillText(text, textX, textY);
  //     ctx.fillStyle = '#6A7997';
  //     ctx.save();
  //   };
  


              // plugins = {[
            //   {
            //     beforeDraw: function(chart)
            //     {
            //       drawInnerText(chart);
            //     },
                
            //   },
            // ]} 


            //진료과별
// export const dataDepartment = {

//   labels: ['피부과', '내과', '성형외과','외과', '이비인후과', '기타'],
//   datasets: [
//     {
//       data: [30,22,20,14,10,4],
//       backgroundColor: [
//         'rgba(51, 97, 255, 1.0)',
//         'rgba(51, 97, 255, 0.8)',
//         'rgba(51, 97, 255, 0.6)',
//         'rgba(51, 97, 255, 0.4)',
//         'rgba(51, 97, 255, 0.2)',
//         'rgba(107,122,153, 0.9)'
//       ],
//       borderColor: [
//         'rgba(51, 97, 255, 1.0)',
//         'rgba(51, 97, 255, 0.8)',
//         'rgba(51, 97, 255, 0.6)',
//         'rgba(51, 97, 255, 0.4)',
//         'rgba(51, 97, 255, 0.2)',
//         'rgba(107,122,153, 0.9)'
//       ],
//       borderWidth: 1
//     },
//   ],
// };

// //질환별 
// export const dataDisease = {
//   labels: ['피부과', '내과', '성형외과','외과', '이비인후과', '기타'],
//   datasets: [
//     {
//       // label:' ',
//       data: [30,22,20,14,10,4],
//       backgroundColor: [
//         'rgba(51, 97, 255, 1.0)',
//         'rgba(51, 97, 255, 0.8)',
//         'rgba(51, 97, 255, 0.6)',
//         'rgba(51, 97, 255, 0.4)',
//         'rgba(51, 97, 255, 0.2)',
//         'rgba(107,122,153, 0.9)'
//       ],
//       borderColor: [
//         'rgba(51, 97, 255, 1.0)',
//         'rgba(51, 97, 255, 0.8)',
//         'rgba(51, 97, 255, 0.6)',
//         'rgba(51, 97, 255, 0.4)',
//         'rgba(51, 97, 255, 0.2)',
//         'rgba(107,122,153, 0.9)'
//       ],
//       borderWidth: 1
//     },
//   ],
// };
