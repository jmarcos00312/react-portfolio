import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import './manualNav.css';



function ManualNavbar() {

    return (
        <NavbarContainer position="static">
            <h1 style={{ background: "#222626", fontSize: "20px" }}>Jeremiah Marcos</h1>
            <ButtonContainer>
                <Link to="/" className='home' style={{ color: "#F3F3FA" }}>
                    <p>
                        Home
                    </p>
                </Link>
                <Link to="/projects" className="projects" style={{ color: "#F3F3FA" }}>
                    <p>
                        Projects
                    </p>
                </Link>
                <Link to="/blogs" className="blogs" style={{ color: "#F3F3FA" }}>
                    <p>
                        Blogs
                    </p>
                </Link>
                <Link to="/contact" className="contact" style={{ color: "#F3F3FA" }}>
                    <p>
                        Contact
                    </p>
                </Link>
                <Link to="/" className="resume" style={{ color: "#F3F3FA" }} onClick={() => window.open("https://drive.google.com/file/d/15l4GpeZNiYdRH_vjT1VHiN98S0VKNvVr/view", "_blank")}>
                        Resume
                    
                </Link>
            </ButtonContainer>
        </NavbarContainer>
    )

}

export default ManualNavbar

const NavbarContainer = styled.nav`
background-color: #222626;
width: 100%;
height: 80px;
color: White;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 25px;
align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 95px;
        font-size: 17px;
         width:100%;
    }
        @media (max-width: 1200px) {

        display: flex;
        height: 95px;
        font-size: 20px;
        
    }

`
const ButtonContainer = styled.div`
gap: 20px;
display: flex;
color: "#F3F3FA";
align-items: center;
margin: 0 auto;
&:hover {
       color: "#81879E";
       border-bottom: "1px solid white";
    };
    @media (max-width: 420px) {
        font-size: 17px;
        gap: 10px;
    };
    @media (max-width: 1200px) {
        margin-left:50px;
    }

`