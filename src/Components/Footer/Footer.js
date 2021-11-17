import React from 'react';
import './Footer.css';

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footerContainer'>
            <img src="../Images/Logo192.png" alt="" className="footerLogo" />

            <p className="footerText">
                Check me out on 
                <button className="footerButton">
                    <a href="https://www.linkedin.com/in/benjamin-navarro-162096182/" target="_blank" className="footerLink">Linkedin</a>
                </button>
            </p>

            <p className="footerText">
                Feel free to email me at
                <button className="footerButton">
                    <a href="mailto:ben@aggressorlabs.com" className="footerLink">ben@aggressorlabs.com</a>
                </button>
            </p>

            <p className="footerText">
                Send a message in the form on the 
                <button className="footerButton">
                    <Link to="/contact" className="footerLink">Contact Page</Link>
                </button>
            </p>

            <p className="copyrightText">
                Copyright © 2021 Benjamin Navarro - Aggressor Labs
            </p>
        </div>
    )
}

export default Footer;
