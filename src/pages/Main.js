import React from "react";
import About_block from '../components/MainPage/About_block';
import Therapy_block from '../components/MainPage/Therapy_block';
import Hero from "../components/MainPage/Hero";
import Articles_block from "../components/MainPage/Articles_block";
import '../CSS/main.css';

export default function Main () {
  return (
    <main className="main">
      <Hero />

      <About_block name="Узнать больше"/>
      
      <Therapy_block />

      {/* <Articles_block /> */}
    </main>
  )
}
