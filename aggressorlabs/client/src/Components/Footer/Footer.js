import React from 'react';
import './Footer.css';

import { Link } from "react-router-dom";

function Footer(props) {
    const hasShadow = props.hasShadow;

    React.useEffect(()=>
    {
        let footerContainer = document.getElementById('footerContainer');
        if(hasShadow === true)
        {
            footerContainer.style.boxShadow = "inset 0px 5px 10px -5px #0C1821";
        }
    },[hasShadow]);

    return (
        <div className='footerContainer' id='footerContainer'>

            {/* <img  src="../Images/Logo512Dark.png" alt="" className="footerLogo" /> */}

            <p className="footerText">
                Check me out on 
                <button className="footerButton">
                    <a href="https://www.linkedin.com/in/benjamin-navarro-162096182/" target="_blank" rel="noreferrer" className="footerLink">LinkedIn</a>
                </button>
            </p>

            <p className="footerText">
                Feel free to email me at
                <button className="footerButton">
                    <a href="mailto:ben@aggressorlabs.com" className="footerLink">ben@aggressorlabs.com</a>
                </button>
            </p>

            {/* <p className="footerText">
                Send a message in the form on the 
                <button className="footerButton">
                    <Link to="/contact" className="footerLink">Contact Page</Link>
                </button>
            </p> */}

            <p className="copyrightText">
                Copyright © 2021 Benjamin Navarro - AggressorLabs
            </p>
        </div>
    )
}

export default Footer;
