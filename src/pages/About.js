import React from "react";
import Description from "../components/AboutPage/Description";
import Table from "../components/AboutPage/Table";
import Adress from "../components/AboutPage/Adress";
import Photogallery from "../components/AboutPage/Photogallery";
import Booking from "../components/AboutPage/Booking";
import Page_title from "../components/ui/Page_title";

export default function About() {
  return (
    <div>
      <Page_title getTitle="О клинике" back={"/"}/>

      <Description />

      <Table />

      <Adress />

      <Photogallery />

      <Booking />
    </div>
  )
}
  