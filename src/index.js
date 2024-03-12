import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import App from'./App';
import './CSS/main.css';
import './CSS/normolize.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjf25fZ0LdYz04r4W-Q9ajrpPNIFlO6r0",
  authDomain: "endocampus-40d05.firebaseapp.com",
  projectId: "endocampus-40d05",
  storageBucket: "endocampus-40d05.appspot.com",
  messagingSenderId: "785664585337",
  appId: "1:785664585337:web:26e1b1a7eb8b6d1a6b2ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <HashRouter>
        <App tab="home"/>
    </HashRouter>
);
