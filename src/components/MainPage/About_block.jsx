import React from 'react';
import styled from 'styled-components';
import Fadeev from "../../img/Fadeev.png";
import { Link } from 'react-router-dom';

export default function About_block() {
  return (
    <section className="about">
        <div className="about-container container">
            <svg className="about-line flex" width="415" height="2" viewBox="0 0 415 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.640442" y1="1" x2="414.034" y2="1" stroke="black" strokeOpacity="0.2" strokeWidth="2"/>
            </svg>
            <p className="about-dscr">
                Благодаря высокому профессионализму врачей&nbsp;&mdash; эндокринологов и&nbsp;постоянно совершенствующимся методам диагностики и&nbsp;лечения клиника эндокринологии способна оперативно и&nbsp;качественно оказывать специализированную помощь пациентам с&nbsp;любой эндокринной патологией.
            </p>
            <svg className="about-line flex" width="415" height="2" viewBox="0 0 415 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.640442" y1="1" x2="414.034" y2="1" stroke="black" strokeOpacity="0.2" strokeWidth="2"/>
            </svg>
        </div>
        <div className="about-block">
            <div className="about-kol container flex">
                <img src={Fadeev} className="about-kol-img" alt="Фото профессора Фадеева В.В"/>
                <DarkButton className="dark-btn-mob flex">
                    <Link style = {{display: "flex", alignItems: "center"}} to="/about">Узнать больше</Link>
                </DarkButton>
                <div className="about-kol-content flex">
                    <p className="about-kol-text">
                        Мы создали специальную программу, которая помогает врачам в диагностике и исключает лишние назначения.
                    </p>
                    <span className="about-kol-name" >
                        Валентин Фадеев, заведующий клиникой
                    </span>
                    
                    <DarkButton className="dark-btn">
                        <a style = {{display: "flex", alignItems: "center"}}href="/about">Узнать больше</a>
                    </DarkButton>
                </div>
                
            </div>
        </div>
        
    
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
  font-size: 20px;
  margin-bottom: 5vw;
`;
