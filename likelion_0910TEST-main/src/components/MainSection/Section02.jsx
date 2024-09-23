import React from 'react'

const Section02 = () => {
  return (
    <div className='sec02'>
      <div className='yelbox'>
        <span>초등 3학년 교과서</span>
      </div>
      <h2 className='ft_gia'>
        선생님과 학생을 생각하는 <br />지학사 교과서
      </h2>
      <p className='ft_gia_p'>
        가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.
        <br />
        항상 학교 현장을 고민하는 지학사 교과서가
        <br />
        그동안의 경험을 모아 더 나은 수업을 도와드립니다.
        <ul className='pr-mtab'>
          <li className='math mtab'>
            <span></span>
            <p>수학</p>
          </li>
          <li className='ss mtab'>
            <span>사회</span>
          </li>
          <li className='science mtab'>
            <span>과학</span>
          </li>
          <li className='music mtab'>
            <span>음악</span>
          </li>
          <li className='art mtab'>
            <span>미술</span>
          </li>
          <li className='phys mtab'>
            <span>체육</span>
          </li>
        </ul>
      </p>
      <div className="books">
        <ul className='books1'>
          <li className='book b1'></li>
          <li className='book b2'></li>
          <li className='book b3'></li>
          <li className='book b4'></li>
          <li className='book b5'></li>
          <li className='book b6'></li>
          <li className='book b7'></li>
          <li className='book b8'></li>
        </ul>
        <ul className='books2'>
          <li className='book b9'></li>
          <li className='book b10'></li>
          <li className='book b11'></li>
          <li className='book b12'></li>
          <li className='book b13'></li>
          <li className='book b14'></li>
          <li className='book b15'></li>
          <li className='book b16'></li>
        </ul>
      </div>
    </div>
  )
}

export default Section02
