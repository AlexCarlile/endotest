import React, { useState } from 'react';
import logo from '../img/logo_sech_white.svg';
import Booking from './AboutPage/Booking';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../CSS/main.css';

export default function Header() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <footer className="footer">
      <div className="container flex header-container">
        <Link to="/" className="header-logo footer-logo">
          <img src={logo} alt="олготип Сеченовского Университета" />
        </Link>
        <nav className="header-nav flex">
          <ul className="footer-list list-reset flex">
            <li className="footer-list-item">
              <Link to="/">Главная</Link> 
            </li>
            <li className="footer-list-item">
              <Link to="/about">О клинике</Link>
            </li>
            {/* <li className="footer-list-item">
              <Link to="/prices">Цены</Link>
            </li> */}
            <li className="footer-list-item">
              <Link to="/hcp">Врачи</Link>
            </li>
            {/* <li className="footer-list-item">
              <Link to="/blog">Блог</Link>
            </li> */}
            <li className="footer-list-item">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
        
        <div className='footer-interact flex'>
          <a className="header-interact-tel" href="tel:+74994508889">+7 499 450 88 89</a>
          <button className="footer-btn"onClick={() => setModalActive(true)}>Записаться на прием</button>  
        </div>
        <Booking active={modalActive} setActive={setModalActive} link={"https://n1076145.yclients.com"}/>
      </div>
      <div className="container">
      <a style={{color:"white", fontSize:"1px"}} href="icon666.com" title="следующий иконки">Бесплатные SVG иконки на icon666.com</a>
      </div>
     
    </footer>
  )
}

// const DarkButton = styled.button`
//   // border: 1px solid white;
//   // border-radius: 30px;
//   // border-radius: 30px;
//   // padding: 1vw 3vw;
//   // color: white;
//   // background-color: #415279;
//   // cursor: pointer;
// `;