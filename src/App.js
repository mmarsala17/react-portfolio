import "./App.css";
import React from "react";

import header from "./components/Header";

import About from "./components/About";


function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <About></About>
            </main>
        </div>
    );
}

export default App;
