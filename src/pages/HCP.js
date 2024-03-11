import React, { useState } from "react";
import { HCP_list } from "../components/HCPPage/HCP_list";
import { Link } from "react-router-dom";
import '/Users/alexselyukov/Documents/napp/my-app/src/CSS/main.css';
import Page_title from "../components/ui/Page_title";

export default function HCP () {
    const [searchTerm, setSearchTerm] = useState("");
    
    // Функция для обновления состояния поискового запроса
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
      <main className="main-hcp">
        <Page_title getTitle={"Врачи"} back={"/"}/>
        {/* Поисковая строка */}
        <div className="serach-container container flex">
            <h2 className="search-title">
                Найдите своего врача
            </h2>
            <input className="hcp-search"
                type="text"
                placeholder="Поиск врачей..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
        
        <div className="hcp-container container">
            <ul className="hcp-list list-reset flex">
                {searchTerm === "" ? (
                    // Если поисковый запрос пустой, отображаем все карточки
                    HCP_list.map((hcp) => 
                        <li key={hcp.id} className="hcp-card-bckg flex">
                            <Link to={hcp.path}>
                                <div className="hcp-card-info flex" style={{ backgroundImage: `url(${hcp.image})` }}>
                                    <div className="hcp-card-name">
                                        {hcp.fullName}
                                    </div>
                                    <div className="hcp-card-dscr flex">
                                        <div className="">
                                            {hcp.specialties}
                                        </div>
                                        <div className="hcp-more flex">
                                            ПОДРОБНЕЕ
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )) : ((
                    HCP_list.filter((hcp) =>
                    hcp.fullName && searchTerm &&
                    hcp.fullName.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((filteredHCP) =>  
                    <li key={filteredHCP.id} className="hcp-card-bckg flex">
                        <Link to={filteredHCP.path}>
                            {/* <img src={filteredHCP.image} className=".hcp-img"/> */}
                            <div className="hcp-card-info flex" style = {{backgroundImage:`url(${filteredHCP.image})`}}>
                                <div className="hcp-card-name">
                                    {filteredHCP.fullName}
                                </div>
                                <div className="hcp-card-dscr flex">
                                    <div className="" >
                                        {filteredHCP.specialties}
                                    </div>
                                    <div className="hcp-more flex">
                                        ПОДРОБНЕЕ
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    ))
                    )}
                </ul>
        </div>
      </main>
    )
  }