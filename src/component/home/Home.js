import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './home.css'
import certifications from '../../imgs/Certification of completion.png'
import { SiRuby } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { DiPython } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { DiGit } from 'react-icons/di'
import { MdComputer } from 'react-icons/md'
import TypeAnimation from 'react-type-animation';




function Home() {
    return (
        <div className="home-container">
            {/* header material ui */}
            <div></div>

            <header className="home-header">
                <h1 id="job-title">Software Developer</h1>
                <div>
                    <LinkedInIcon fontSize="2px" color="primary" onClick={() => window.open("https://www.linkedin.com/in/jeremiahmarcos/", "_blank")} />
                    <GitHubIcon fontSize="2px" color="black" onClick={() => window.open("https://github.com/jmarcos00312", "_blank")} />
                </div>
            </header>

            {/* container material ui */}
            <section>
                <div className="header-container">
                    <img className="profilePic" src="https://jmarcos00312.github.io/cssPortfolio/pictures/sitting-smilling.jpg" alt="profile" />
                    <h1 id="welcome">Welcome to my portfolio, I am a <strong id="software-developer">Software Developer</strong> <br /> with experience in
                        <TypeAnimation
                            cursor={false}
                            sequence={['React', 3000, 'Ruby on Rails', 3000, 'SQL', 3000, 'Python', 2000]}
                            wrapper="h2"
                            repeat={Infinity}
                            className="typing"
                        /></h1>
                    {/* <h1>Welcome to my portfolio site, I am a software developer with experience in React, Ruby on Rails and SQL.</h1> */}
                </div>
                <div className="aboutMe">
                    <p className="about">My name is <strong id="important">Jeremiah Marcos</strong> and I am located in <strong id="important">Austin, Texas</strong>.
                        Before deciding to become a software developer,
                        I was working as a dialysis technician for <strong id="important">Baylor Scott and White</strong>. I was also going to school
                        to be a nurse. I decided to switch my major to <strong id="important">Computer Science</strong>. After one semester, I started
                        looking at other options and that's when I learned about Software Engineer coding boot-camps.
                        I decided to apply for <strong id="important">Flatiron school</strong>. Throughout my time at Flatiron, I gained my skills
                        and experience in React and Ruby on Rails and worked collaboratively.
                    </p>
                </div>
                <div className="skills-container">
                    <h1 id="skills"> <MdComputer /> Skills <MdComputer /></h1>
                    <div className="div-skills">
                        <h3> <GrReactjs />React</h3>
                        <h3> <SiRuby /> Ruby on Rails</h3>
                        <h3> <DiPython /> Python</h3>
                        <h3> <AiOutlineConsoleSql /> SQL</h3>
                        <h3> <DiGit /> Git</h3>
                        <h3> <IoLogoJavascript /> JavaScript</h3>
                        <h3> <DiCss3 /> CSS</h3>
                        <h3> <AiFillHtml5 /> HTML</h3>
                    </div>
                </div>

                {/* about me */}
                <div className="certification">
                    <img src={certifications} alt="certification" />
                </div>
            </section>
            <footer>
                <h4>linkedin</h4>
            </footer>

        </div>
    )
}

export default Home
