import React  from "react";
import Navigation from "../Navigation";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div>
            <h2>Mark Marsala's React Portfolio</h2>
            </div>
            <div className="tabs">
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            ></Navigation>
            </div>
        </header>
    );
}

export default Header;