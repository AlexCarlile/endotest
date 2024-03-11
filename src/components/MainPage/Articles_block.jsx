import React from 'react';
import { newList } from "./articles.js";
// import '../../CSS/main.css';

export default function Articles_block() {
  return (
    <section className="articles" >
      <div className="articles-container container">
              <h2 className="articles-title page-title">
                  Статьи
              </h2>
              <ul className="articles-list list-reset flex">
                {newList.map((article) => 
                  <li 
                    key={article.id} className="articles-card"
                    style={{
                      backgroundImage: `url(${article.image})`,
                  }}>                    
                    
                    <div className="articles-bckg flex">
                      <a className="articles-card-info article-title flex">
                        {article.title}
                      </a>
                      <a className="articles-card-info more">
                        Подробнее
                      </a>
                    </div>
                    

                  </li>
                )}
              </ul>
          </div>
    </section>
    
  )
}
