import React from 'react';
import Footer from '../../Components/Footer/Footer';
import './CowboyShooter.css';



function CowboyShooter() {
return (
    <>
        <div className="CowboyShooter-header">
            <h1 classname="CowboyShooter-headerText">Portfolio</h1>
        </div>

        <body>
            <div className="CowboyShooter-bodybackground">
                <div className="CowboyShooter-bodyContainer">
                    <div className="CowboyShooter-leftBox">
                        <div className="CowboyShooter-imageBox">
                            <img src= "../Images/tempImage.png" className="CowboyShooter-projectImage" />
                        </div>
                    </div>

                    <div className="CowboyShooter-rightBox">
                        <h2 className="CowboyShooter-projectTitle">Cowboy Shooter</h2>

                        <h3 className="CowboyShooter-descriptionTitle">Description:</h3>
                        <p className="CowboyShooter-projectDescription">
                           A gamemode based off of a common shooter party game of 'One in the Chamber'.
                           You have can only load one bullet into your gun and killing an enemy instantly loads another bullet into your gun.
                        </p>
                        
                        <h3 className="CowboyShooter-linkTitle">Links:</h3>
                        <div className="CowboyShooter-linkDiv">
                            <a href="" className="CowboyShooter-link" target="_blank">GitHub Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)};

export default CowboyShooter;
