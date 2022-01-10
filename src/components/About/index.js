import React from "react";

function About() {
    return (
        <section>
     <div className="center page-header" id="about">
         About Me
     </div>
     <div className="center">
         <img
            src={require('../../assets/images/mark and syd.jpg')}
            alt="Mark and Syd"
            className="photo"
            />
     </div>
     <div>
            <p>
                Hi! My name is Mark Marsala and I know that you've come here to see my work and learn about me. I was born in Ft. Myers, FL and I currently live in Charlotte, NC with my wife and my son Enzo. durring the day I take care of my son and during the night I play competitive video games. currently ive been competing in <em>Halo</em>. 
            </p>
            <p>
                I also have been playing Valorant and Apex Legends in my spare time.
            </p>
            <p>
                One of the reasons i decided to take this class is that i enjoy coding and want to build a career out of it. 
            </p>
            </div>
        </section>
    );
}

export default About;