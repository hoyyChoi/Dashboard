import React from 'react'

const Sidebar = () => {

    const sidemenu = ['대시보드', '디자인모드', '사용자관리', '수익관리', '예약', '콘텐츠 관리']

  return (
    <div id="page-wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">MEDIFLIX</a>
                </li>
                {sidemenu.map((menu)=>{
                    return <li><a href="#">{menu}</a></li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar




