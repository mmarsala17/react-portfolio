import React, { useState } from "react";
import Navigation from "../Navigation";

function Header() {
    cosnt [categories] = useState(["about", "portfolio", "contact", "resume"]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <header>
            <h2>Mark Marsala's React Portfolio</h2>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Navigation>
        </header>
    );
}

export default Header;