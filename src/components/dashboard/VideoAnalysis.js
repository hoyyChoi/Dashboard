import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display:false,
      position: 'right',
      rtl: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
      }
    }
  }
}



//진료과별
export const dataDepartment = {

  labels: ['피부과', '내과', '성형외과','외과', '이비인후과', '기타'],
  datasets: [
    {
      label:' ',
      data: [30,22,20,14,10,4],
      backgroundColor: [
        'rgba(51, 97, 255, 1.0)',
        'rgba(51, 97, 255, 0.8)',
        'rgba(51, 97, 255, 0.6)',
        'rgba(51, 97, 255, 0.4)',
        'rgba(51, 97, 255, 0.2)',
        'rgba(107,122,153, 0.9)'
      ],
      borderColor: [
        'rgba(51, 97, 255, 1.0)',
        'rgba(51, 97, 255, 0.8)',
        'rgba(51, 97, 255, 0.6)',
        'rgba(51, 97, 255, 0.4)',
        'rgba(51, 97, 255, 0.2)',
        'rgba(107,122,153, 0.9)'
      ],
      borderWidth: 1,
      options: options
    },
  ],
};

//질환별 
export const dataDisease = {
  labels: ['피부과', '내과', '성형외과','외과', '이비인후과'],
  datasets: [
    {
      label: '',
      data: [39,26,15,32,26,15],
    },
    {
      label: '',
      data: [25,20,20,10,5,5],
    }

  ]
}


const VideoAnalysis = () => {
  
  const options = {
    legend: {
       labels: {
          usePointStyle: true  //<-- set this
       }
    },
}

  const drawInnerText = (chart) => {
      let ctx = chart.ctx;
      ctx.restore();
      const fontSize = (chart.height / 114).toFixed(2);
      ctx.font = fontSize + 'em sans-serif';
      ctx.textBaseline = 'middle';
      const dataArrValues = chart.config._config.data.datasets[0].data;
      let text =
        chart.tooltip._active.length > 0
          ? `${Math.round(
              (dataArrValues[chart.tooltip._active[0].datasetIndex] /
                dataArrValues.reduce((a, b) => a + b)) *
                100
            )}%`
          : `${Math.round(
              (dataArrValues[0] / dataArrValues.reduce((a, b) => a + b)) * 100
            )}%`;
      let textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
      let textY = chart.height / 2 + chart.legend.height / 2;
      ctx.fillText(text, textX, textY);
      ctx.fillStyle = '#fff';
      ctx.save();
    };
  
  return (
    <div className='video-analysis'>
      <div className='title'>
        <div className='analysis-title'>
        조회수 분석
        </div>
        <Dropdown className='video-dropdown'
            placeholder="Select an option"
            options={['진료', '비진료']}
            value={'진료'}
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            onOpen={() => console.log('open!')}
          />
      </div>

      <div className='doughnut'>
      <Doughnut 
          data={dataDepartment}
          plugins = {[
            {
              beforeDraw: function(chart) {
                drawInnerText(chart);
              },
            },
          ]}
          options = {options} />
      </div>
    </div>

  )
}

export default VideoAnalysis