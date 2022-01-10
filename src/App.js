import "./App.css";
import React, { useState }  from "react";

import Header from "./components/Header";

import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
    const [currentTab, setCurrentTab] = useState("about");

    const renderTab = () => {
    
    };
    return (
        <div>
            <Header
                aboutSelected={aboutSelected}
                setAboutSelected={setAboutSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                resumeSelected={resumeSelected}
                setResumeSelected={setResumeSelected}
            ></Header>
            <main>
               {renderTab()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
