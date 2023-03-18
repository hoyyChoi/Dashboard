import React from 'react'

const Ranking = () => {

    const arr = ['당뇨','개원의','척추 퇴행', 'ADHD', '알츠하이머', '갑상선암']

  return (
    <div className="search-ranking">
        <header>
            주간 검색어 순위
        </header>
        <div className='week-ranking'>
            2023년 3월 셋째주
        </div>
        <ul className='word-ranking'>
            {arr.map((item,idx)=>{
                return (
                    <li>
                        <div className='num'>{idx+1}</div>
                        <div className='item'>
                            <div>{item}</div>
                            <div>+</div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Ranking