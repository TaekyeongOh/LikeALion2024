import React from 'react';
import '../assets/scss/style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-buttons">
                <button>로그인</button>
                <button>최근 본 상품</button>
                <button>주문/배송</button>
            </div>

            <div className="footer-info">
                <p><strong>고객센터</strong> 1544-3800 | 중고샵 1566-4295</p>
                <p>(평일 09:00~18:00 토요일, 일요일 및 공휴일 휴무)</p>
            </div>

            <div className="footer-company">
                <p><strong>예스이십사(주)</strong></p>
                <p>대표 : 김석환, 최세라</p>
                <p>주소 : 서울시 영등포구 은행로 11, 5층~6층 (여의도동, 일신빌딩)</p>
                <p>사업자등록번호 : 229-81-37000 통신판매업신고 : 제 2005-02682</p>
                <p>이메일 : yes24help@yes24.com</p>
                <p>호스팅 서비스사업자 : 예스이십사(주)</p>
                <p>&copy; YES24 Corp. All Rights Reserved.</p>
            </div>

            <div className="footer-links">
                <a href="#">개인정보처리방침</a>|
                <a href="#">이용약관</a>|
                <a href="#">PC버전</a>|
                <a href="#">회사소개</a>|
                <a href="#">거래처관계자개인정보처리방침</a>|
                <a href="#">도서홍보</a>|
                <a href="#">광고</a>
            </div>
        </div>
    );
}

export default Footer;
