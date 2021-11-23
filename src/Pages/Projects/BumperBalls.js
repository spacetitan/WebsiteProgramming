import React from 'react';
import Footer from '../../Components/Footer/Footer';
import './BumperBalls.css';

function BumperBalls() {
return (
    <>
        <div className="BumperBalls-header">
            <h1 classname="BumperBalls-headerText">Portfolio</h1>
        </div>

        <body>
            <div className="BumperBalls-bodybackground">
                <div className="BumperBalls-bodyContainer">
                    <div className="BumperBalls-leftBox">
                        <div className="BumperBalls-imageBox">
                            <img src= "../Images/tempImage.png" className="BumperBalls-projectImage" />
                        </div>
                    </div>

                    <div className="BumperBalls-rightBox">
                        <h2 className="BumperBalls-projectTitle">Bumper Balls</h2>

                        <h3 className="BumperBalls-descriptionTitle">Description:</h3>
                        <p className="BumperBalls-projectDescription">
                           A copy of the Mario Party Minigame where you play as a ball and the goal is to be the last one remaining on the platform.
                           This project uses simple physics and AI for the other players.
                        </p>
                        
                        <h3 className="BumperBalls-linkTitle">Links:</h3>
                        <div className="BumperBalls-linkDiv">
                            <a href="" className="BumperBalls-link" target="_blank">GitHub Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)}

export default BumperBalls;
