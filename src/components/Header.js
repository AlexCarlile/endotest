import React, { useState } from 'react';
import Button from './ui/Button';
import logo from '../img/logo_sech.png';
import Booking from './AboutPage/Booking';
import { Link } from 'react-router-dom';
import '../CSS/main.css';


export default function Header() {
  const [modalActive, setModalActive] = useState(false)
  const [navActive, setNavActive] = useState(false)

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <header className="header">
      <div className="header-container flex container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Логотип Сеченовского Университета" />
        </Link>
        <nav className= {navActive === true ? "header-nav active flex " : "header-nav flex"}>
          <ul className="header-list list-reset flex">
            <li className="header-list-item">
              <Link className="header-item-txt" to="/" onClick={closeMenu}>Главная</Link> 
            </li>
            <li className="header-list-item">
              <Link className="header-item-txt" to="/about" onClick={closeMenu}>О клинике</Link>
            </li>
            {/* <li className="header-list-item">
              <Link className="header-item-txt" to="/prices">Цены</Link>
            </li> */}
            <li className="header-list-item">
              <Link className="header-item-txt" to="/hcp" onClick={closeMenu}>Врачи</Link>
            </li>
            {/* <li className="header-list-item">
              <Link className="header-item-txt" to="/blog">Блог</Link>
            </li> */}
            <li className="header-list-item">
              <Link className="header-item-txt" to="/contacts" onClick={closeMenu}>Контакты</Link>
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
