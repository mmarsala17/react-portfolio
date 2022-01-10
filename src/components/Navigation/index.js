import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {

   const { currentTab, setCurrentTab } = props;

    return (
            <nav className="tabs">
                
                <ul className="flex-row">
                    <li className={currentTab == "about" ? "mx-2 navActive" : "mx-2"}>
                        <span onClick={() => setCurrentTab("about")}>About Me</span>
                    </li>
                 
                  <li className={currentTab == "about" ? "mx-2 navActive" : "mx-2"}>
                      <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                  </li>
                  <li classNane={currentTab == "about" ? "mx-2 navActive" : "mx-2"}>
                            <span onClick={() => setCurrentTab("contact")}>Contact</span>
                  </li>
                  <li className={currentTab == "about" ? "mx-2 navActive" : "mx-2"}>
                            <span onClick={() => setCurrentTab("resume")}>Resume</span>
                  </li>
                </ul>
            </nav>
    );
}

export default Navigation;