import React from 'react';
import Footer from '../../Components/Footer/Footer';
import YoutubeEmbed from '../../Components/Video/YoutubeEmbed';
import './Maelstrom.css';

function Maelstrom() {
return (
    <>
        <div className="Maelstrom-header">
            <h1 classname="Maelstrom-headerText">Portfolio</h1>
        </div>
    
        <body>
            <div className="Maelstrom-bodybackground">
                <div className="Maelstrom-bodyContainer">
                    <div className="Maelstrom-backButtonContainer">
                        <a href="/portfolio" className="Maelstrom-backButton">{String.fromCharCode(8592)}Back to portfolio</a>
                    </div>
                    <div className="Maelstrom-leftBox">
                        <div className="Maelstrom-imageBox">
                            <YoutubeEmbed embedId='9trTL695qf8' />
                        </div>
                    </div>

                    <div className="Maelstrom-rightBox">
                        <h2 className="Maelstrom-projectTitle">Maelstrom</h2>

                        <h3 className="Maelstrom-descriptionTitle">Description:</h3>
                        <p className="Maelstrom-projectDescription">
                            Worked mostly on controller support integration for console release and fulfilling console requirements.
                            Fixing issues that appeared when building for console and modifying existing blueprints to read controller input.
                            Also worked on restructuring the UI to accept input from a controller and keyboard simultaneously.
                        </p>
                        
                        <h3 className="Maelstrom-linkTitle">Links:</h3>
                        <div className="Maelstrom-linkDiv">
                            <a href="https://store.steampowered.com/app/764050/Maelstrom/" className="Maelstrom-link" target="_blank">Check it out on Steam</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)};

export default Maelstrom
