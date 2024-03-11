import React, { useState } from 'react';
import Button from './ui/Button';
import logo from '../img/logo_sech.png';
import Booking from './AboutPage/Booking';
import '../CSS/main.css';


export default function Header() {
  const [modalActive, setModalActive] = useState(false)
  const [navActive, setNavActive] = useState(false)

  return (
    <header className="header">
      <div className="header-container flex container">
        <a href="/" className="header-logo">
          <img src={logo} alt="Логотип Сеченовского Университета" />
        </a>
        <nav className= {navActive === true ? "header-nav active flex " : "header-nav flex"}>
          <ul className="header-list list-reset flex">
            <li className="header-list-item">
              <a className="header-item-txt" href="/">Главная</a> 
            </li>
            <li className="header-list-item">
              <a className="header-item-txt" href="/about">О клинике</a>
            </li>
            {/* <li className="header-list-item">
              <a className="header-item-txt" href="/prices">Цены</a>
            </li> */}
            <li className="header-list-item">
              <a className="header-item-txt" href="/hcp">Врачи</a>
            </li>
            {/* <li className="header-list-item">
              <a className="header-item-txt" href="/blog">Блог</a>
            </li> */}
            <li className="header-list-item">
              <a className="header-item-txt" href="/contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        
        {/* <button className="burger btn-reset">
            <span className="burger-line"></span>
        </button> */}

        <div className='header-interact flex'>
            <a className="header-interact-tel" href="tel:+74994508889">+7 499 450 88 89</a>
            <Button name="Записаться на прием" action={() => setModalActive(true)}/>
        </div>

        <button className={navActive ? "burger active btn-reset" : "burger btn-reset"} onClick={(navActive === true ) ? () => setNavActive(false) : () => setNavActive(true)}>
            <span className="burger-line"></span>
        </button>
      </div>
      
      
      <Booking active={modalActive} setActive={setModalActive} link={"https://n1076145.yclients.com"}/>
    </header>
  )
}
