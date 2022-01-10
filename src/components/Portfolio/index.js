import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: "The Local Queen",
            description:
             "This is your way to dine exactly the perfect brewery for you to go to in Charlotte, NC",
            image: "Screenshot-2021-09-22-172311.png",
            technologies:
                "HTML, CSS, API, Bootstrap",
                github: "https://github.com/bdiaz28/Project-1v3",
                deployed: "https://bdiaz28.github.io/Project-1v3/"
        },
        {
            name: "Mystery Tunes",
            description: "The perfect user generated music playlist",
            image: "Screenshot-2021-11-14-220903.png",
            technologies: 
            "HTML, CSS, Handlebars, JS, MySQL, Heroku",
            github: "https://github.com/kee43093/Random-PlayList-Generator",
            deployed: "https://final-random-playlist.herokuapp.com/"
 
        },
    ];

    return (
        <section>
            <div className="center">
                <h3 className="page-header">My Portfolio</h3>
                </div>
                <div>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div> 
        </section>
    );
}

export default Portfolio;