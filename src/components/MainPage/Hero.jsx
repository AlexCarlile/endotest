import React, { useState } from 'react';
import Booking from '../AboutPage/Booking';
import styled from 'styled-components';

export default function Hero() {
  const [modalActive, setModalActive] = useState(false)
  
  return (
    <section className="hero">
        <div className="hero-container container">
            <ul className="hero-list list-reset flex">
              <li className="hero-list-item hero-dscr flex">
                <h1 className="hero-dscr-title">Клиника эндокринологии</h1>
                <p className="hero-dscr-text">
                    Клиника эндокринологии существует более 20&nbsp;лет и&nbsp;является одним из&nbsp;ведущих медицинских учреждений эндокринологического профиля.
                </p>

                <DarkButton className="hero-btn" onClick={() => setModalActive(true)}>Записаться на прием</DarkButton>
              </li>
              <li className="hero-list-item hero-list-photo">

              </li>
            </ul>
        </div>

        <Booking active={modalActive} setActive={setModalActive} link={"https://n1076145.yclients.com"}/>
    </section>
  )
}


const DarkButton = styled.button`
  border: 1px solid #1B2F5D;
  border-radius: 30px;
  padding: 16px 40px;
  color: white;
  background-color: #1B2F5E;
  cursor: pointer;
`;