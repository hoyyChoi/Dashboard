import React,{useState,useRef,useEffect } from 'react'
import Memo from './Memo'

const NotePad = ({setOpen,memolist,setMemolist}) => {




    const [text,setText] = useState('')
    const [value,setValue] =useState('')

    const typingMemo = (e)=>{
        setText(e.target.value)
    }

    const memoUpload = ()=>{
        let memo = {
            img:'Mask group.svg',
            name:'홍길동',
            time:'1분전',
            num:0,
            memo:text
       }
        setMemolist(memolist.concat(memo))
        setText('')
    }


    const scrollRef = useRef();
    useEffect(() => {
    	// 현재 스크롤 위치 === scrollRef.current.scrollTop
        // 스크롤 길이 === scrollRef.current.scrollHeight
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });

  return (
    <div className='notepad-container'>
        <div className='notepad-header'>
            <header>
                <div style={{paddingTop:'4px'}}>메모</div>
                <img onClick={()=>{setOpen(false)}} style={{cursor:'pointer'}} width={18} src='Close.svg'/>
            </header>
        </div>
        <div style={{height:'490px',overflow:'scroll'}}  ref={scrollRef}>
            {memolist.map((item)=>{
                return (
                    <Memo item={item}/>
                )
            })}
        </div>
        <div className='memo-write'>
            <div className='input-memo-container'>
                <div style={{marginRight:'12px'}}><img src='Mask group.svg'/></div>
                <textarea className='input-memo' type='text' placeholder='메모' onChange={(e)=>setText(e.target.value)} value={text} required/>
            </div>
            <button className='memo-Btn' onClick={memoUpload}>등록</button>
        </div>
    </div>
  )
}

export default NotePad