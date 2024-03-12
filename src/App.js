import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { Routes, Route } from "react-router-dom";
import HCP from "./pages/HCP";
import { HCP_list } from "./components/HCPPage/HCP_list";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export default function App () {
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCd11lLxG8sb0zPtMZX86qODe5fitki7I4",
    authDomain: "endocampus-afae4.firebaseapp.com",
    projectId: "endocampus-afae4",
    storageBucket: "endocampus-afae4.appspot.com",
    messagingSenderId: "1073309684018",
    appId: "1:1073309684018:web:dea11ad030b943fd5ec72b"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/hcp" element={<HCP />} />
                {HCP_list.map((hcp) => 
                    <Route key={hcp.id} path={hcp.path} element={hcp.comp}/>
                )}
                <Route path="/contacts" element={<Contacts />} />
                {/* <Route path="/hcp/berkovskaya" element={<Berkovskaya/>}/> */}
                {/* <Route path="/prices" component={Prices} />
                <Route path="/blog" component={Blog} /> */}
            </Routes>  
            <Footer />
        </div>
    )
}

