import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {

   const { currentTab, setCurrentTab } = props;

    return (
            <nav>
                
                <ul className="flex-row">
                    <li className="mx-2">
                        {/* <span
                        onClick={() => (
                            setAboutSelected(true),
                            setPortfolioSelected(false),
                            setContactSelected(false),
                            setResumeSelected(false),
                        )}
                        >
                            About Me
                        </span> */}
                        <span onClick={() => setCurrentTab("about")}>About Mee</span>
                    </li>
                 
                  <li className="mx-2">
                      {/* <span
                      onClick={() => (
                          setAboutSelected(false),
                          setPortfolioSelected(true),
                          setContactSelected(false),
                          setResumeSelected(false),
                      )}
                      >
                          Portfolio
                      </span> */}
                      <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                  </li>
                  <li classNane="mx-2">
                        {/* <span
                            onClick={() => (
                                setAboutSelected(false),
                                setPortfolioSelected(false),
                                setContactSelected(true),
                                setResumeSelected(false)
                            )}
                            >
                        Contact
                            </span> */}
                            <span onClick={() => setCurrentTab("contact")}>Contact</span>
                  </li>
                  <li className="mx-2">
                      {/* <span
                            onClick={() => (
                                () => setAboutSelected(false),
                                setPortfolioSelected(false),
                                setContactSelected(false),
                                setResumeSelected(true)
                            )}
                            >
                    Resume
                            </span> */}
                            <span onClick={() => setCurrentTab("resume")}>Resume</span>
                  </li>
                </ul>
            </nav>
    );
}

export default Navigation;