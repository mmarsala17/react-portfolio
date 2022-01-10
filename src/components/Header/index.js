import React  from "react";
import Navigation from "../Navigation";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header className="header">
            <h2>Mark Marsala's React Portfolio</h2>
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            ></Navigation>
        </header>
    );
}

export default Header;