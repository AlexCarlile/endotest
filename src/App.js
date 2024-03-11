import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HCP from "./pages/HCP";
import { HCP_list } from "./components/HCPPage/HCP_list";


export default function App () {
    return (
        <div className="wrapper">
            <Header />
            <Router>
                <Routes basename={process.env.PUBLIC_URL}>
                    <Route exact path="/#/" element={<Main />} />
                    <Route path="/#/about" element={<About />} />
                    <Route path="/hcp" element={<HCP />} />
                    {HCP_list.map((hcp) => 
                        <Route key={hcp.id} path={hcp.path} element={hcp.comp}/>
                    )}
                    <Route path="/contacts" element={<Contacts />} />
                    {/* <Route path="/hcp/berkovskaya" element={< Berkovskaya/>}/> */}
                    {/* <Route path="/prices" component={Prices} />
                    <Route path="/blog" component={Blog} /> */}
                </Routes> 
            </Router>  
            <Footer />
        </div>
    )
}

