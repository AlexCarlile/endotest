import React, {useState} from 'react';
import "../../CSS/main.css";

export default function Booking({active, setActive, link}) {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    // Функция для загрузки содержимого iframe
    const loadIframeContent = () => {
        setIframeLoaded(true);
    };


    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='booking-block flex' onClick={e => e.stopPropagation()}>
                <div className="booking-top flex">
                    <h2 className="booking-title">Записаться на прием</h2>
                    <div className="close-block flex" onClick={() => setActive(false)}>
                        <span className="close-booking"></span>
                    </div>  
                </div>

                <div className="iframe-container">
                    <iframe className='yclient' height="600px" width="320px" frameBorder="0" allowtransparency="false" id="ms_booking_iframe" src={link} scrolling="auto"></iframe>  
                </div>
                
            </div>
        </div>
  )     
}
