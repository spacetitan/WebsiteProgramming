import React from 'react';
import './TPMS.css';

import Footer from '../../Components/Footer/Footer';

function TPMS() {
return (
    <>
        <div className="TPMS-header">
            <h1 classname="TPMS-headerText">Portfolio</h1>
        </div>

        <body>
            <div className="TPMS-bodybackground">
                <div className="TPMS-bodyContainer">
                    <div className="TPMS-leftBox">
                        <div className="TPMS-imageBox">
                            <img src= "../Images/tempImage.png" className="TPMS-projectImage" />
                        </div>
                    </div>

                    <div className="TPMS-rightBox">
                        <h2 className="TPMS-projectTitle">Third Person Mech Shooter</h2>

                        <h3 className="TPMS-descriptionTitle">Description:</h3>
                        <p className="TPMS-projectDescription">
                            A somewhat permanent project that I come back to now and again to re-familiarize myself to Unity.
                            I've been designing and working on it for years, off-and-on, just to have a creative outlet and remember why I choose to program.
                            This project also utilizes Scriptable Objects and help me learn them and other tools and concepts for myself.
                        </p>
                        
                        <h3 className="TPMS-linkTitle">Links:</h3>
                        <div className="TPMS-linkDiv">
                            <a href="" className="TPMS-link" target="_blank">GitHub Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)};

export default TPMS;
