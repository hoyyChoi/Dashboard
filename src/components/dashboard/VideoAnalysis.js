import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
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
      label:'of Votes',
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
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            rtl: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
            }
          }
        }
      },
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

    }

  ]
}


const VideoAnalysis = () => {

  
  return (
    <div className='video-analysis'>
      <div className='title'>조회수 분석</div>
      <div className='doughnut'>
      <Doughnut 
          data={dataDepartment}
          style={{ }} />
      </div>

    </div>

  )
}

export default VideoAnalysis