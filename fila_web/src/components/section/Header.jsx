import React from 'react'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <a>
                <img src='../assets/img/HeaderLogo.svg' className='HeaderLogo'></img>
            </a>
            
            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/women'>
                            WOMEN
                            <img src="../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/men'>
                            MEN
                            <img src="../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/kids'>
                            KIDS
                            <img src="../img/image9.svg" class="dropdown-image"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/tennis'>
                            TENNIS
                        </a>
                    </li>
                    <li>
                        <a href='/brand'>
                            BRAND
                        </a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header