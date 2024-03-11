import React from "react";
import {createRoot} from "react-dom/client";
import App from'./App';
import './CSS/main.css';
import './CSS/normolize.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    // <React.StrictMode>
    //     <Provider store={store}>
    //         <Router basename="/home">
                <App tab="home"/>
    //         </Router>
    //     </Provider>
    // </React.StrictMode>
);
