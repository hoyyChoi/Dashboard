import { te } from 'date-fns/locale'
import React,{useEffect, useState} from 'react'
import { getUpload } from '../../remote/server'
import moment from "moment";

const Upload = () => {

    const [btn,setBtn] = useState(false)
    // const expect = [['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','9:00'],['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','9:30'],['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','10:00'],['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','11:00'],['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','19:00'],['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','19:00'],['의사로 살아간다는 것은','ㄷㄱㅂㅎㄹㄷㄱㅎ결조','19:00']]
    // const complete = [['의사로 살아간다는 것은','9:00'],['의사로 살아간다는 것은','9:30'],['의사로 살아간다는 것은','10:00'],['의사로 살아간다는 것은','11:00'],['의사로 살아간다는 것은','19:00']]

    const [upload,setUpload] = useState({})
    const [expect,setExpect] =useState([])
    const [complete,setComplete] = useState([]);

    let com =[]
    let exp = []

    useEffect(()=>{
        getUpload()
        .then(res=>{
            setUpload(res.data)
            const arr = res.data.result
            arr.map((item)=>{
                if(item.uploadStatus ==='완료'){
                    com.push(item)
                    console.log('com',com)
                }else if(item.uploadStatus ==='예정'){
                    exp.push(item)
                    console.log('item',exp)
                }
            })
            setComplete(com)
            setExpect(exp)
        })
        .catch((err)=>console.log(err));
    },[])

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
                    <div className='UploadCount'>{upload.doneCount}</div>
                    <div className='UploadText'>총 {upload.totalCount}개 중 {upload.doneCount}개 업로드 완료</div>
                </div>
            </div>
            <div className='UploadDate'>{moment(upload.date).format("YYYY년 MM월 DD일")}</div>
            <div className='UploadList'>
                {complete.map((item,idx)=>{
                    return (
                        <li>
                            <div className='num'>{idx+1}</div>
                            <div className="item">
                                <div>
                                    <div style={{fontWeight:'500',color:'#2F384A',fontSize:'15px'}}>{item.title}</div>
                                    <div>{item.hospital+item.professor}</div>
                                </div>
                                <div>{item.length}</div>
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
                    <div className='UploadCount'>{upload.undoneCount}</div>
                    <div className='UploadText'>총 {upload.totalCount}개 중 {upload.undoneCount}개 업로드 예정</div>
                </div>
            </div>
            <div className='UploadDate'>{moment(upload.date).format("YYYY년 MM월 DD일")}</div>
            <div className='UploadList'>
                {expect.map((item,idx)=>{
                    return (
                        <li>
                            <div className='num'>{idx+1}</div>
                            <div className="item">
                                <div>
                                    <div style={{fontWeight:'500',color:'#2F384A',fontSize:'15px'}}>{item.title}</div>
                                    <div>{item.hospital+item.professor}</div>
                                </div>
                                <div>{item.length}</div>
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>}
    </div>)}

export default Upload

