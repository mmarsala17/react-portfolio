import React from "react";

function Project() {
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

        }
    ];

    return (
        <section>
            <h3>Project Section</h3>
            <ul className="flex-row">
                <li>Project 1</li>
                <li>Project 2</li>
            </ul>
            <ul className="flex-row">
                <li>Project 3</li>
                <li>Project 4</li>
            </ul>
            <ul className="flex-row">
                <li>Project 5</li>
                <li>Project 6</li>
            </ul>
        </section>
    );
}

export default Project;