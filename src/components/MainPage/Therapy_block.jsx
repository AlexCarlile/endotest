import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '/Users/alexselyukov/Documents/napp/my-app/src/CSS/main.css'

export default function Therapy_block() {
  return (
    <div className="therapy-container container">
        <h2 className="therapy-title page-title">
            Лечебная работа
        </h2>

        <ul className="therapy-list list-reset flex">
            <li className="therapy-list-item flex">
                <Link to="/about">
                   Заболевания щитовидной железы
                </Link>
            </li>
            <li className="therapy-list-item flex">
                <Link to="/about">
                   Патология парощитовидных желез
                </Link>
            </li>
            <li className="therapy-list-item flex">
                <Link to="/about">
                   Сахарный диабет
                </Link>
            </li>
            <li className="therapy-list-item flex">
                <Link to="/about">
                   Эндокринология-гинекология
                </Link>
            </li>
            <li className="therapy-list-item flex">
                <Link to="/about">
                   Гипоталамо-гипофизарные заболевания
                </Link>
            </li>
            <li className="therapy-list-item flex">
                <Link to="/about">
                   Остеопороз
                </Link>
            </li>
        </ul>

        <DarkButton className="therapy-dark-btn">
            <Link to="/about">Все направления</Link>
        </DarkButton>
    </div>
  )
}


const DarkButton = styled.button`
  border: 1px solid #1B2F5D;
  border-radius: 30px;
  padding: 16px 40px;
  color: white;
  background-color: #1B2F5E;
  font-size: 20px;
  cursor: pointer;
`;