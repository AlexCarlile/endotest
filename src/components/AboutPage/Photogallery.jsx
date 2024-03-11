import React, { useState } from "react";
import { photoGallerry } from "./photos.js";


export default function Photogallery() {
  const [slide, setSlide] = useState(1)
  
  return (
    <section className="phglr">
        <div className="container phglr-container">
            <h3 className="page-title">Фотогалерея</h3>
            <ul className="phglr-list list-reset flex">
                {photoGallerry.map(photo =>
                    <li className="glr_image" key={photo.id} style={{backgroundImage: `url(${photo.url})`}}> 
                    </li>
                )}
            </ul>
            <div className="phglr-list-mob flex">
              <svg className="arrow-slide arrow-slide-left" onClick={slide === 1 ? () => setSlide(6) : () => setSlide(slide - 1)} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m14 1a13 13 0 1 0 13 13 13.015 13.015 0 0 0 -13-13zm0 24a11 11 0 1 1 11-11 11.013 11.013 0 0 1 -11 11z"/><path d="m12 6.586-1.414 1.414 6 6-6 6 1.414 1.414 6.707-6.707a1 1 0 0 0 0-1.414z"/></g></svg>
              <img className="glr_image" src={photoGallerry.find(spec => spec.id === slide).url} alt="Фотографии из клиники эндокринологии"></img>
              <svg className="arrow-slide" onClick={ slide === 6 ? () => setSlide(1) : () => setSlide(slide + 1)} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m14 1a13 13 0 1 0 13 13 13.015 13.015 0 0 0 -13-13zm0 24a11 11 0 1 1 11-11 11.013 11.013 0 0 1 -11 11z"/><path d="m12 6.586-1.414 1.414 6 6-6 6 1.414 1.414 6.707-6.707a1 1 0 0 0 0-1.414z"/></g></svg>
            </div>
        </div>
    </section>

  )
}
