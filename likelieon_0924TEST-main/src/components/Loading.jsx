import React from 'react'
import loadLogo from '../assets/img/icon/Logowhole.svg'

const Loading = () => {
    return (
        <div className='Loading_wrap container'>
            <div className="loadingLogo">
                <img src={loadLogo}/>
            </div>
        </div>
    )
}

export default Loading