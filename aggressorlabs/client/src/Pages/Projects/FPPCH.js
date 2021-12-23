import React from 'react';
import Footer from '../../Components/Footer/Footer';
import './FPPCH.css';

function FPPCH() {
return (
    <>
        <div className="FPPCH-header">
            <h1 classname="FPPCH-headerText">Portfolio</h1>
        </div>
    
        <body>
            <div className="FPPCH-bodybackground">
                <div className="FPPCH-bodyContainer">
                    <div className="FPPCH-leftBox">
                        <div className="FPPCH-imageBox">
                            <img src= "../Images/TempImage.png" className="FPPCH-projectImage" />
                        </div>
                    </div>

                    <div className="FPPCH-rightBox">
                        <h2 className="FPPCH-projectTitle">First Person Point and Click Horror</h2>

                        <h3 className="FPPCH-descriptionTitle">Description:</h3>
                        <p className="FPPCH-projectDescription">
                            This was a project that was inspired not long ago and I use this project to explore more Game Design Concepts.
                            The inspiration for this project was a house tour found on the internet of a church that was turned into a warehouse.
                            Exploring it and finding strange items and rooms as I went further into the church was something I thought would make a good horror game.
                            A rundown of the design would be entering a similar building, but the further you go down, the stranger things would get.
                            I wanted a type of point and click, like Google Earth and GeoGuesser, and the rooms, items, and/or monsters would move when you do.
                            You would have to be alert to your surroundings and pay close attention while the setting hopefully keeps you immersed and on edge.
                            <br/><br/>
                            This is not in a presentable state.
                        </p>
                        
                        {/* <h3 className="FPPCH-linkTitle">Links:</h3>
                        <div className="FPPCH-linkDiv">
                            <a href="" className="FPPCH-link" target="_blank">GitHub Link</a>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)
}

export default FPPCH;
