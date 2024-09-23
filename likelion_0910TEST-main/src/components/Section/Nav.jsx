import React from 'react'
import '../../../src/assets/scss/section/components.scss'

const Nav = () => {
    return (
        <div className="header">
            <div className="wrap">
                <h1 className='logo'>
                    <a href='http://textbook.jihak.co.kr/main-pr.php'></a>
                </h1>
                <ul className='ul'>
                    <li className='n_li'>초등 3학년 교과서</li>
                    <li className='n_li'>초등 4학년 교과서</li>
                </ul>
                <ul className='ul'>
                    <li className='n_li'>티솔루션</li>
                    <li className='n_li'>이벤트
                        <span className='event'>EVENT</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
