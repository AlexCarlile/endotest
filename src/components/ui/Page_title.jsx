import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function Page_title(props) {
    const title = props;
    const navigate = useNavigate();
    
    return (
        <div className="descr-title">
            <div className="descr-title-container container flex" >
                <button className="back-group flex btn-reset" onClick={ () => navigate(title.back, { replace: false }) }>
                    <span className="back-line"></span>
                    <span className="back">Назад</span>
                </button>
                <h1 className="descr-title-text">{title.getTitle}</h1>
            </div>
        </div>
    )
}
