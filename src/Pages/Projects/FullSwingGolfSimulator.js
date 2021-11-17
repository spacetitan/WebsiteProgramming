import React from 'react';
import './FullSwingGolfSimulator.css';

import Footer from '../../Components/Footer/Footer';

function FullSwingGolfSimulator() {
return (
<>
    <header>
        <div className="FSGS-headerContainer">
            <h1>Portfolio</h1>
       </div>
    </header>
   
    <body>
        <div className="FSGS-bodybackground">
            <div className="FSGS-bodyContainer">
                <div className="FSGS-leftBox">
                    <div className="FSGS-imageBox">
                        <img src= "../Images/Projects/FullSwingGolfSimulator.jpg" className="FSGS-projectImage" />
                    </div>
                </div>

                <div className="FSGS-rightBox">
                    <h2 className="FSGS-projectTitle">Full Swing Golf Simulator</h2>

                    <h3 className="FSGS-descriptionTitle">Description:</h3>
                    <p className="FSGS-projectDescription">
                        When working on this project we had to interface into a prototype simulator unit and process data passed from several sensors and cameras. 
                        Personally worked on processing camera and sensor data to display in Post-Shot UI for detailed display of data and slow motion video replay of the club connecting with the ball. 
                        Also worked on tweaking and marking bounderies and areas for courses constructed by satillite data. As well as creating, optimizing, and refining main menu UI and some in-game UI.
                    </p>
                    
                    <h3 className="FSGS-linkTitle">Links:</h3>
                    <div className="FSGS-linkDiv">
                        <a href="https://www.youtube.com/watch?v=YZvCHaoGK_I" className="FSGS-link" target="_blank">Check out this video</a>
                    </div>
                    <div className="FSGS-linkDiv">
                        <p className="FSGS-or">-or-</p>
                    </div>
                    <div className="FSGS-linkDiv">
                        <a href="https://www.fullswinggolf.com/golf-simulator/" className="FSGS-link" target="_blank">Check out their website</a>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </body>
</>
);}

export default FullSwingGolfSimulator;
