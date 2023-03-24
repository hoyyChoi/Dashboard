import React from 'react'

const ManagerInfo = () => {
  return (
    <div className='information'>
        <div className='text'>
            <div style={{fontSize:'24px',fontWeight:'500' ,lineHeight:'40px'}}>홍길동</div>
            <div style={{fontSize:'12px',fontWeight:'500',color:'#6B7A99',lineHeight:'24px'}}>최고 관리자</div>
        </div>
        <div className='img'>
            <div style={{width:'100px'}}><img style={{marginLeft:'68px'}} width={32} src='Mask group.svg'/></div>
            <div style={{fontSize:'12px',fontWeight:'500',color:'#6B7A99',lineHeight:'24px'}}>Verified Account</div>
        </div>
    </div>
  )
}

export default ManagerInfo