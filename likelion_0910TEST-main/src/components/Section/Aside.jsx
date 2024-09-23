import React from 'react'
import '../../assets/scss/section/components.scss'

const Aside = () => {

    const copyToClipboard = () => {
        const url = 'https://textbook.jihak.co.kr/main-pr.php';
        navigator.clipboard.writeText(url).then(() => {
            alert('링크가 복사되었습니다.');
        }).catch(err => {
            console.error('복사 실패:', err);
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div className='aside'>
            <div className='copy' onClick={copyToClipboard}></div>
            <div className='top' onClick={scrollToTop}></div>
        </div>
    )
}

export default Aside
