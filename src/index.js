import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import App from'./App';
import './CSS/main.css';
import './CSS/normolize.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <HashRouter>
        <App tab="home"/>
    </HashRouter>
);