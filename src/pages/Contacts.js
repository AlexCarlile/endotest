import React from 'react';
import Adress from '../components/AboutPage/Adress';
import Page_title from '../components/ui/Page_title';

export default function Contacts() {
  return (
    <div>
        <Page_title getTitle={"Контакты"} back={"/"}/>
        <Adress />
        <div className="contacts-container container">
          <ul className="conatacts-list flex">
            <li className="contacts-item flex">
              <span className="contacts-item-first">
                <b>Связаться с нами:</b>
              </span>
              <a href="tel:+74994508889">+7 499 450 88 89</a>
            </li>
            
            <li className="contacts-item flex">
              <span className="contacts-item-first">
                <b>Режим работы:</b>
              </span>
              <span>
                Пн — Пт: 14:00 — 19:00
              </span>
            </li>
          </ul>
        </div>
    </div>
  )
}
