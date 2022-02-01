import React from 'react'
import './contact.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contact() {
    return (
        <div className="contact-container">
            <div>
                <div className="icons">
                    <h1 onClick={() => window.open("https://www.linkedin.com/in/jeremiahmarcos/", "_blank")} >
                        <LinkedInIcon fontSize="xx-large" />
                    </h1>
                    {/* <hr /> */}
                    <h1 onClick={() => window.open("https://github.com/jmarcos00312", "_blank")}>
                        <GitHubIcon fontSize="xx-large" />
                    </h1>
                </div>
            </div>
            <div className="contact-form">
                <form action="https://formspree.io/f/xaylvewk" method="post">
                    <div className="form">
                        <label>Name</label>
                        <input id="name" name="name" required type="text" placeholder="Enter name" className="form-name-email" />
                        <label>Email: </label>
                        <input id="email" name="email" required type="email" placeholder="Enter email" className="form-name-email" />
                        <label>Message: </label>
                        <textarea id="content" name="content"
                            cols="20" rows="7" placeholder="Do you have any question?"></textarea>
                        <button type="submit" className="submit-form">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
