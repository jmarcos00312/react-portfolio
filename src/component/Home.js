import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
    return (
        <div>
            {/* header material ui */}
            <header>
                <h1>Software Developer</h1>
                <LinkedInIcon />
                <GitHubIcon />
            </header>
            {/* container material ui */}
            <section>
                <img src="https://jmarcos00312.github.io/cssPortfolio/pictures/sitting-smilling.jpg" />
                <h1>Welcome to my portfolio site, I am a software developer with experince with React, Ruby on Rails, HTML, CSS, and Python.</h1>
                {/* about me */}
            </section>
            <div className="aboutMe">
                <h3>My name is Jeremiah Marcos since I was in a young age, I've always been interested in programming. I enjoy problem solving and work with other programers. <br />
                    I learned more about React, Ruby on Rails, HTML and CSS with my time in Flatiron School. The Software Engineering program in Flatiron School helped me gain more real world problem and projects. <br />
                    Outside of Flatiron I have been 
                </h3>
            </div>
            <h1>Home component</h1>

        </div>
    )
}

export default Home
