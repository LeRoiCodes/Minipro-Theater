import React from 'react'
import './Header.css'
import img1 from '../../images/live_tv.png'

function Header() {
  return (
    <div className='test'>
        <header className='header_1'>
            <div className='logo_1'>
                <img src={img1} alt='minipro logo'/>
                <h1>MINIPRO THEATRE</h1>
            </div>
            <div className='nav_1'>
                <a className='btn_1' href='#'>NOW SHOWING</a>
                <a className='btn_1' href='#'>ABOUT</a>
                <a className='btn_1' href='#'>SERVICES</a>
                <a className='btn_1' href='#'>FAQ</a>
                <a className='btn_1' href='#'>CONTACT US</a>
                <a className='btn_white' href='#'>SIGN IN</a>
            </div>
        </header>
    </div>
  )
}

export default Header