import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { HCP_list } from "./HCP_list";
import { HCP_descr } from "./HCP_descr";
import styled from 'styled-components';
import Booking from "../AboutPage/Booking";
import Page_title from "../ui/Page_title";
import HCP_more from "../ui/HCP_more";

export default function Berkovskaya(props) {
  const fade = props;
  const location = useLocation();
  const path = location.pathname
  const id = HCP_list.find(spec => spec.path === path).id;
  const checkComponent = Object.keys(HCP_descr.find(spec => spec.id === id));

  const [modalActive, setModalActive] = useState(false);
  
  return (  
    <main className={fade.fadeActive}>
      <Page_title getTitle="Врачи" back={"/hcp"}/>
      <div className="hcp-container container">
        <div className="hcp-info flex container">
          <img src={HCP_list.find(img => img.id === id).image} className="hcp-info-image img"/>
          <div className="hcp-info-dscr flex">
            <h2>{HCP_list.find(name => name.id === id).fullName}</h2>
            <span>{HCP_list.find(name => name.id === id).fullSpecialties}</span>
            {/* <span>Тел. {HCP_list.find(tel => tel.id === id).tel}</span> */}
            <DarkButton onClick={() => setModalActive(true)} className="dark-bt-hcp">Записаться на прием</DarkButton>
          </div>
        </div>

        <div className="hcp-details flex">
          <div className="hcp-details-block">
            {checkComponent.includes("moreSpecialties") ? <HCP_more id = {id} directory = {"moreSpecialties"} title = {"Специализация"}/> : ""}
            {checkComponent.includes("achievments") ? <HCP_more id = {id} directory = {"achievments"} title = {"Достижения"}/> : ""}
            {checkComponent.includes("about") ? <HCP_more id = {id} directory = {"about"} title = {"О себе"}/> : ""}
            {checkComponent.includes("experience") ? <HCP_more id = {id} directory = {"experience"} title = {"Опыт работы"}/> : ""}
            {checkComponent.includes("education") ? <HCP_more id = {id} directory = {"education"} title = {"Образование"}/> : ""}
          </div>
        </div>
      </div>
      <Booking active={modalActive} setActive={setModalActive} link={HCP_list.find(name => name.id === id).bookingLink}/>
    </main>
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