import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import './manualNav.css';



function ManualNavbar() {

    return (
        <NavbarContainer position="static">
            <h1 style={{ background: "#222626", fontSize: "20px", margin: "0" }}>Jeremiah Marcos</h1>
            <ButtonContainer>
                <NavLink to="/" className='home' style={{ color: "#F3F3FA" }}>
                    <p>
                        Home
                    </p>
                </NavLink>
                <NavLink to="/projects" className="projects" style={{ color: "#F3F3FA" }}>
                    <p>
                        Projects
                    </p>
                </NavLink>
                <NavLink to="/blogs" className="blogs" style={{ color: "#F3F3FA" }}>
                    <p>
                        Blogs
                    </p>
                </NavLink>
                <NavLink to="/contact" className="contact" style={{ color: "#F3F3FA" }}>
                    <p>
                        Contact
                    </p>
                </NavLink>
                <NavLink to="/" className="resume" style={{ color: "#F3F3FA" }} onClick={() => window.open("https://drive.google.com/file/d/15l4GpeZNiYdRH_vjT1VHiN98S0VKNvVr/view", "_blank")}>
                    <a>
                        Resume
                    </a>
                </NavLink>
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
const myNameStyle = styled.h1`
    @media (max-width: 768px) {
        display: none;
    }
`