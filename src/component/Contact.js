import React from 'react'
import './contact.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contact() {
    return (
        <div className="contact-container">
            <div className="icons">
                <Link href="https://www.linkedin.com/in/jeremiahmarcos/" target="_blank" rel="noreferrer noopener">
                    <LinkedInIcon />
                </Link>
                <Link href="https://github.com/jmarcos00312" target="_blank" rel="noreferrer noopener">
                    <GitHubIcon />
                </Link>
            </div>
            <div className="contact-form">
                <form action="https://formspree.io/f/xaylvewk">
                    <div className="form">
                    <label>Name</label>
                    <input id="name" name="name" required type="text" placeholder="Enter name" />
                    <label>Email: </label>
                    <input id="email" name="email" required type="email" placeholder="Enter email" />
                    <label>Message: </label>
                    <textarea id="content" name="content"
                        cols="20" rows="7" placeholder="Like my page? Disliked it? Let me know."></textarea>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
