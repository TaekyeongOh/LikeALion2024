import React, { useRef,useState } from 'react';
import '../assets/scss/style.scss';
import kc from '../assets/img/kc.png';

const Nav = () => {
    const infoRef = useRef(null);
    const reviewRef = useRef(null);
    const etcRef = useRef(null);
    const [activeSection, setActiveSection] = useState('info');

    const scrollToSection = (ref, section) => {
        setActiveSection(section);
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className='navSec'>
            <div className="navch" style={{ position: 'sticky', top: '0', zIndex: '100', backgroundColor: '#fff' }}>
                <div
                    className='navInfo'
                    onClick={() => scrollToSection(infoRef, 'info')}
                    style={{
                        backgroundColor: activeSection === 'info' ? '#000' : '#fff',
                        color: activeSection === 'info' ? '#fff' : '#000'
                    }}
                >
                    도서정보
                </div>
                <div
                    className='navRev'
                    onClick={() => scrollToSection(reviewRef, 'review')}
                    style={{
                        backgroundColor: activeSection === 'review' ? '#000' : '#fff',
                        color: activeSection === 'review' ? '#fff' : '#000'
                    }}
                >
                    리뷰/한줄평
                </div>
                <div
                    className='etc'
                    onClick={() => scrollToSection(etcRef, 'etc')}
                    style={{
                        backgroundColor: activeSection === 'etc' ? '#000' : '#fff',
                        color: activeSection === 'etc' ? '#fff' : '#000'
                    }}
                >
                    배송/반품/교환
                </div>
            </div>
            

            <div ref={infoRef} style={{ padding: '80px 20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: '80px auto 20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>발행일</th>
                            <td style={{ padding: '8px' }}>2024년 09월 23일</td>
                        </tr>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>쪽수, 무게, 크기</th>
                            <td style={{ padding: '8px' }}>52쪽 | 496g | 233*305*11mm</td>
                        </tr>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>ISBN13</th>
                            <td style={{ padding: '8px' }}>9788901287263</td>
                        </tr>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>ISBN10</th>
                            <td style={{ padding: '8px' }}>8901287269</td>
                        </tr>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>KC인증</th>
                            <td style={{ padding: '8px' }}>
                                <img src={kc} alt="KC인증 마크" style={{ width: '20px', verticalAlign: 'middle' }} />
                                <span style={{ marginLeft: '5px' }}>적합성확인</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div ref={reviewRef} className="reviewSection" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
                <div className="reviewHeader">
                    <h3>출판사 리뷰</h3>
                    <h3>회원리뷰 (10건)</h3>
                </div>
                <div className="reviewInput">
                    <input type="text" placeholder="리뷰 쓰기" />
                    <p>혜택 및 유의사항</p>
                </div>
                <div className="rating">
                    <span className="ratingStars">⭐⭐⭐⭐⭐</span>
                    <span className="ratingScore">10.0 / 10.0</span>
                </div>
            </div>

            <div ref={etcRef} className="etc" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
                <h3>배송/반품/교환 안내</h3>
                <h4>배송 안내</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>배송 구분</th>
                            <td style={{ padding: '8px' }}>예스24 배송 - 배송비: 2,500원</td>
                        </tr>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>포장 안내</th>
                            <td style={{ padding: '8px' }}>안전하고 정확한 포장을 위해 CCTV를 설치하여 운영하고 있습니다.</td>
                        </tr>
                    </tbody>
                </table>
                <h4>반품/교환 안내</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                    <li>반품/교환 방법: 고객만족센터(1544-3800), 중고샵(1566-4295)에 문의</li>
                    <li>반품/교환 가능 기간: 출고 완료 후 10일 이내의 주문 상품</li>
                    <li>반품/교환 비용: 고객의 단순 변심 및 착오 구매일 경우, 반송 비용은 고객 부담</li>
                </ul>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>반품/교환 가능 기간</th>
                            <td style={{ padding: '8px' }}>
                                <ul style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
                                    <li>출고 완료 후 10일 이내의 주문 상품</li>
                                    <li>디지털 콘텐츠인 eBook의 경우 구매 후 7일 이내의 상품</li>
                                    <li>중고상품의 경우 출고 완료로부터 6일 이내의 상품</li>
                                    <li>모바일 쿠폰의 경우 유효기간(발행 후 1년) 내 등록하지 않은 상품</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px' }}>반품/교환 비용</th>
                            <td style={{ padding: '8px' }}>
                                <p>고객의 단순 변심 및 착오 구매일 경우 상품 반송 비용은 고객 부담입니다.</p>
                                <p>일부 상품의 경우 반품 또는 착오로 인한 취소 수수료가 발생할 수 있습니다.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Nav;
