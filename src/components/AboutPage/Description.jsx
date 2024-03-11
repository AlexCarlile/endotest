import React, { useState } from "react";
import styled from 'styled-components';
import Fadeev from "../../img/Fadeev.jpg";
import Clinic from "../../img/Clinic.jpg";

export default function Description() {
    const [moreInfo, setMore] = useState(true)
  
    return (
    <section className="descr">
        <div className="container">
                <div className="descr-about descr-container">
                    <ul className="descr-list list-reset flex">
                        <li className="descr-list-item descr-item-text flex">
                            <img src={Clinic} className="descr-list-image active img" alt="Фото клиники эндокринологии"></img>
                            <p className="descr-list-text">
                                <img src={Clinic} className="descr-list-image img" alt="Фото клиники эндокринологии"></img>
                                Клиника эндокринологии существует более 20&nbsp;лет и&nbsp;является одним из&nbsp;ведущих медицинских учреждений эндокринологического профиля. Благодаря высокому профессионализму врачей&nbsp;&mdash; эндокринологов и&nbsp;постоянно совершенствующимся методам диагностики и&nbsp;лечения. 
                                Клиника эндокринологии способна оперативно и&nbsp;качественно оказывать специализированную помощь пациентам с&nbsp;любой эндокринной патологией.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="descr-container">
                    <p className="descr-aim">
                        <strong>Сегодня наша главная цель&nbsp;&mdash;</strong> эффективное лечение. Клиника располагает палатами с&nbsp;улучшенными условиями пребывания. Мы&nbsp;не&nbsp;хотим, чтобы вы&nbsp;чувствовали себя, как в&nbsp;больнице, поэтому создали уютную и&nbsp;дружелюбную обстановку.
                    </p>
                </div>

                <div className="descr-container descr-director flex">
                    <img className="descr-director-image active img" src={Fadeev} alt="Фото профессор Фадеева В.В."/>
                    <div className="descr-director-text">
                        <img className="descr-director-image img" src={Fadeev} alt="Фото профессор Фадеева В.В."/>
                        Директором клиники эндокринологии Первого МГМУ им. И.М. Сеченова является врач-эндокринолог, профессор, д.м.н., член-корреспондент Российской Академии Наук <b>Фадеев Валентин Викторович.</b>
                        <DarkButton className="descr-director-btn" onClick={(moreInfo === false) ?  () => setMore(true) : () => setMore(false)}>Подробнее</DarkButton>
                        <p className={moreInfo ? "descr-director-more" : "descr-director-more active"}>
                            Является председателем Московской Городской Ассоциации Эндокринологов (МАЭ), членом правления Российской Ассоциации Эндокринологов (РАЭ), председателем секции по&nbsp;заболеваниям щитовидной железы, а&nbsp;также членом Европейского Эндокринологического общества (ESE) и&nbsp;Европейской Тиреоидной Ассоциации (ЕТА)Автор более 30&nbsp;научных работ, монографий, книг по&nbsp;специальности, включая учебник по&nbsp;эндокринологии для ВУЗов. Член редколлегий реферируемых журналов: &laquo;Thyroid&raquo;, &laquo;European Thyroid Journal&raquo;, &laquo;Проблемы эндокринологии&raquo;, &laquo;Клиническая и&nbsp;экспериментальная тиреоидология&raquo;, главный редактор журнала &laquo;Клинические обзоры в&nbsp;эндокринологии&raquo;.
                        </p>
                    </div>
                    <p className="descr-director-">
                        
                    </p>
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
`;