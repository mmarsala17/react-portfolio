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
    switch (currentTab) {
        case "about":
            return <About></About>;
        case "portfolio":
            return <Portfolio />;
        case "contact": 
            return <Contact />;
        case "resume":
            return <Resume />;
        default:
            return null;
    }
    };
    return (
        <div>
            <Header
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            ></Header>
            <main>
               {renderTab()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
