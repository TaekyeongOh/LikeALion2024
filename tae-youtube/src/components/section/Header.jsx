import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiVelog } from "react-icons/si";


const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className="header__logo">
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>tae<br />youtube</span>
        </a>
      </h1>

      <nav className="header__menu">
        <ul className='menu'>
          <li>
            <a href='/'>태경태세문단세</a>
          </li>
          <li>
            <a href='/today'>키스 오브 라이프</a>
          </li>
          <li>
            <a href='/developer'>뉴진스</a>
          </li>
          <li>
            <a href='/webd'>에스파</a>
          </li>
          <li>
            <a href='/website'>블랙핑크</a>
          </li>
          <li>
            <a href='/gsap'>레드벨벳</a>
          </li>
        </ul>

        <ul className='keyword'>
          <li>
            <a href='/search/webstoryboy'>webstoryboy</a>
          </li>
          <li>
            <a href='/search/html'>HTML</a>
          </li>
          <li>
            <a href='/search/css'>CSS</a>
          </li>
          <li>
            <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
            <a href='/search/react.js'>React.js</a>
          </li>
          <li>
            <a href='/search/vue.js'>Vue.js</a>
          </li>
          <li>
            <a href='/search/next.js'>Next.js</a>
          </li>
          <li>
            <a href='/search/node.js'>Node.js</a>
          </li>
          <li>
            <a href='/search/sql'>SQL</a>
          </li>
          <li>
            <a href='/search/React Portfolio'>portfolio</a>
          </li>
          <li>
            <a href='/search/NewJeans'>music</a>
          </li>
        </ul>
      </nav>
      <div className="header__sns">
        <ul>
          <li>
            <a href='https://github.com/TaekyeongOh' rel='noopener noreferrer'>
            <AiFillGithub />
            </a>
          </li>
          <li>
            <a href='https://velog.io/@tae_me/posts' rel='noopener noreferrer'>
            <SiVelog />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/t_aekyeong/' rel='noopener noreferrer'>
            <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header