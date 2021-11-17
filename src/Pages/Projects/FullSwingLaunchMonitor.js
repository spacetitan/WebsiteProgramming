import React from 'react';
import Footer from '../../Components/Footer/Footer';

import './FullSwingLaunchMonitor.css';

function FullSwingLaunchMonitor() {
return (
    <>
        <div className="FSLM-header">
            <h1 classname="FSLM-headerText">Portfolio</h1>
        </div>
    
        <body>
            <div className="FSLM-bodybackground">
                <div className="FSLM-bodyContainer">
                    <div className="FSLM-leftBox">
                        <div className="FSLM-imageBox">
                            <img src= "../Images/Projects/FullSwingGolfSimulator.jpg" className="FSLM-projectImage" />
                        </div>
                    </div>

                    <div className="FSLM-rightBox">
                        <h2 className="FSLM-projectTitle">Full Swing Launch Monitor</h2>

                        <h3 className="FSLM-descriptionTitle">Description:</h3>
                        <p className="FSLM-projectDescription">
                            This project was mostly just outputing data through UI to show stats gathered from a tracker. 
                            I've worked heavily on the Mobile version creating Menus, stat tiles UI, and shot groupings UI.
                            I've also worked somewhat on connecting and sending data to an Apple watch and some of the Apple Watch UI. 
                        </p>
                        
                        <h3 className="FSLM-linkTitle">Links:</h3>
                        <div className="FSLM-linkDiv">
                            <a href="https://www.youtube.com/watch?v=1qJZ3mx5QSU" className="FSLM-link" target="_blank">Check out this video</a>
                        </div>
                        <div className="FSLM-linkDiv">
                            <p className="FSLM-or">-or-</p>
                        </div>
                        <div className="FSLM-linkDiv">
                            <a href="https://www.fullswinggolf.com/kit-launch-monitor/" className="FSLM-link" target="_blank">Check out their website</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)};

export default FullSwingLaunchMonitor;
