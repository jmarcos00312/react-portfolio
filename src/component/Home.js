import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './home.scss'

function Home() {
    return (
        <div className="home-container">
            {/* header material ui */}

            <header>
                <h1>Software Developer</h1>
                <LinkedInIcon />
                <GitHubIcon />
            </header>

            {/* container material ui */}
            <section>
                <div className="header-container">
                    <img src="https://jmarcos00312.github.io/cssPortfolio/pictures/sitting-smilling.jpg" alt="profile" />
                    <h1>Welcome to my portfolio site, I am a software developer with experience in React, Ruby on Rails and SQL.</h1>
                </div>

                <div>
                    <ul>
                        <strong>Skills</strong>
                        <li>React</li>
                        <li>Ruby on Rails</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>RESTful APIs</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>

                {/* about me */}
                <div className="aboutMe">
                    <p className="about">My name is <strong>Jeremiah Marcos</strong> and I am located in <strong>Austin, Texas</strong> .
                        Before changing my career path to become a software developer,
                        I was working as a dialysis technician for Baylor Scott and White,
                        at this time I was also going to school to be a nurse.
                        I realized that nursing and being a dialysis technician is not just not the right career path for me.
                        During the pandemic I switched my major to Computer Science.
                        After one semester of Computer Science, I started looking at career paths to go for,
                        and thats when I learn about Software Engineer coding bootcamps.
                        After a month of researching about bootcamps and debating my self if I should go for it or not,
                        I finally decided to apply for Flatiron school.
                        I read nothing but great reviews about <strong>Flatiron's Software Engineering course</strong>.
                        In Flatiron I gained my skills and experience in <strong>React and Ruby on Rails</strong>,
                        I worked collaboratively with my cohort classmates to solve real world problem and also projects.
                        outside of coding I like to play basketball and play chess.
                    </p>

                </div>

            </section>
            <h1>Home component</h1>

        </div>
    )
}

export default Home
