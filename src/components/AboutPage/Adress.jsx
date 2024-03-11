import React from 'react';
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Adress() {
    return (
        <div className="container adress-container flex">
            <div className="adress-dscr flex">
                <h3 className="adress-title">
                    <b>Как нас найти:</b>
                </h3>
                <p>
                    Адрес: г. Москва, ул. Погодинская, д. 1, стр. 1
                    </p>
                <p className="adress-dscr-more">
                    Станция метро Фрунзенская, Сокольническая линия метро. Выйдя из&nbsp;метро, повернуть налево и&nbsp;пройти вдоль ограды парка до&nbsp;перекрестка с&nbsp;Большой Пироговской улицей, повернуть налево и&nbsp;пройти до&nbsp;улицы Еланского, свернуть на&nbsp;нее, пройти до&nbsp;2-го переулка Тружеников, повернуть налево и&nbsp;через 30&nbsp;метров еще раз налево. Слева будет 9-ти этажный корпус Университетской клинической больницы &#8470;&nbsp;2.
                </p>

            </div>

            <iframe className='y-maps' src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9862aaf3e3c2825fe303cfea5e9201e729a446a6189de7833f315f9103b07b8&amp;source=constructor" allow="geolocation" width="500" height="436" frameBorder="0"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.400845462923!2d37.56947007682471!3d55.73416399342662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bbd15a7d293%3A0x5e7b58d3669a2f07!2sKlinika%20Endokrinologii%20Pervyy%20Mgmu%20Im.sechenoaa!5e0!3m2!1sen!2sru!4v1708001684451!5m2!1sen!2sru" width="593" height="350" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
  )
}
