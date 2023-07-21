import React from 'react';
import './SCEGameshow.css';

import Footer from '../../Components/Footer/Footer';

function SCEGameshow() {
return (
<>
    <header>
        <div className="SCEGameshow-header">
            <h1 className="SCEGameshow-headerText">Portfolio</h1>
       </div>
    </header>
   
    <body>
        <div className="SCEGameshow-bodybackground">
            <div className="SCEGameshow-bodyContainer">
                <div className="SCEGameshow-leftBox">
                    <img src="./Images/tempImage.png" alt="" className="SCEGameshow-projectImage" />
                </div>

                <div className="SCEGameshow-rightBox">
                    <h1 className="SCEGameshow-projectTitle">Title</h1>

                    <h2 className="SCEGameshow-descriptionTitle">Description</h2>
                    <p className="SCEGameshow-projectDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <h2 className="SCEGameshow-linkTitle">Link</h2>
                    <a href="" className="SCEGameshow-link">Link</a>
                </div>
            </div>
        </div>

        <Footer />
    </body>
</>
);}

export default SCEGameshow;

