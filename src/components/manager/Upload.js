import React,{useState} from 'react'

const Upload = () => {

    const [btn,setBtn] = useState(false)
    const expect = [['의사로 살아간다는 것은','9:00'],['의사로 살아간다는 것은','9:30'],['의사로 살아간다는 것은','10:00'],['의사로 살아간다는 것은','11:00'],['의사로 살아간다는 것은','19:00'],['의사로 살아간다는 것은','19:00'],['의사로 살아간다는 것은','19:00']]
    const complete = [['의사로 살아간다는 것은','9:00'],['의사로 살아간다는 것은','9:30'],['의사로 살아간다는 것은','10:00'],['의사로 살아간다는 것은','11:00'],['의사로 살아간다는 것은','19:00']]

    console.log(btn)
  return (
    <div className='upload'>
        <header>
            <div className='title'>업로드</div>
        </header>
        <div className='selectUpload'>
            <div className={btn?'expect':'select'} onClick={() => setBtn(false)}>업로드 예정</div>
            <div className={btn?'select':'complete'} onClick={() => setBtn(true)}>업로드 완료</div>
        </div>
        {btn ?
        <div>
            <div className='description'>
                <div className='container'>
                    <div className='UploadCount'>5</div>
                    <div className='UploadText'>총 12개 중 5개 업로드 완료</div>
                </div>
            </div>
            <div className='UploadDate'>2023년 3월 25일</div>
            <div className='UploadList'>
                {complete.map((item,idx)=>{
                    return (
                        <li>
                            <div className='num'>{idx+1}</div>
                            <div className="item">
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>
        :
        <div>
            <div className='description'>
                <div className='container'>
                    <div className='UploadCount'>7</div>
                    <div className='UploadText'>총 12개 중 7개 업로드 예정</div>
                </div>
            </div>
            <div className='UploadDate'>2023년 3월 25일</div>
            <div className='UploadList'>
                {expect.map((item,idx)=>{
                    return (
                        <li>
                            <div className='num'>{idx+1}</div>
                            <div className="item">
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>}
    </div>)}

export default Upload