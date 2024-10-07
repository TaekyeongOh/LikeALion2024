import React from 'react'
import rightArrow from '../../assets/img/icon/arrowright.svg'

const Notification = () => {
    const notices = [
        "2024학년도 성신 All White 고양돋서 백일장 공모전",
        "2024학년도 동계 단기연수 프로그램 설명회 개최 안내",
        "2024학년도 동계 학부생 연구 참여 프로그램 모집",
        "2024-2 글로벌라운지 운영 안내",
        "2024학년도 2학기 제1차 성신 모의토익 접수 및 시행",
        "2024학년도 동계학기 글로벌 인턴십 안내",
        "2024학년도 2학기 수강편람 시행 안내",
    ];

    return (
        <div className='notification'>
            <div className='h3'>공지사항</div>
            <ul className='no_ul'>
                {notices.map((notice, index) => (
                    <li key={index}>
                        <div className='div_a'>
                            <a href='#'>{notice}</a>
                            <img src={rightArrow} />
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Notification
