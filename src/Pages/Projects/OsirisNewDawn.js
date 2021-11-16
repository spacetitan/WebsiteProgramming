import React from 'react';
import './OsirisNewDawn.css';

import Footer from '../../Components/Footer/Footer';

function OsirisNewDawn() {
return (
<>
    <header>
        <div className="headerContainer">
            <h1>Portfolio</h1>
       </div>
    </header>
   
    <body>
        <div className="bodybackground">
            <div className="bodyContainer">
                <div className="leftBox">
                    <img src="./Images/tempImage.png" alt="" className="projectImage" />
                </div>

                <div className="rightBox">
                    <h1 className="projectTitle">Title</h1>

                    <h2 className="descriptionTitle">Description</h2>
                    <p className="projectDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <h2 className="linkTitle">Link</h2>
                    <a href="" className="link">Link</a>
                </div>
            </div>
        </div>

        <Footer />
    </body>
</>
);}

export default OsirisNewDawn;

