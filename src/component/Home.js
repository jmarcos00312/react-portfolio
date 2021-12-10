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
                <h1>Welcome to my portfolio site, I am a software developer with experince with React, Ruby on Rails, HTML, CSS, and Python</h1>
               {/* about me */}
                <div className="aboutMe">
                    
            </div>
            </section>
            <h1>Home component</h1>

        </div>
    )
}

export default Home
