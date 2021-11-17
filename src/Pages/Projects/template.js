import React from 'react';
import './template.css';

import Footer from '../../Components/Footer/Footer';

function template() {
return (
<>
    <header>
        <div className="template-headerContainer">
            <h1>Portfolio</h1>
       </div>
    </header>
   
    <body>
        <div className="template-bodybackground">
            <div className="template-bodyContainer">
                <div className="template-leftBox">
                    <img src="./Images/tempImage.png" alt="" className="template-projectImage" />
                </div>

                <div className="template-rightBox">
                    <h1 className="template-projectTitle">Title</h1>

                    <h2 className="template-descriptionTitle">Description</h2>
                    <p className="template-projectDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <h2 className="template-linkTitle">Link</h2>
                    <a href="" className="template-link">Link</a>
                </div>
            </div>
        </div>

        <Footer />
    </body>
</>
);}

export default template;

