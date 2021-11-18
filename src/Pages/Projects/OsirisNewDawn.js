import React from 'react';
import './OsirisNewDawn.css';

import Footer from '../../Components/Footer/Footer';
import YoutubeEmbed from '../../Components/Video/YoutubeEmbed';

function OsirisNewDawn() {
return (
    <>
        <div className="Osiris-header">
            <h1 classname="Osiris-headerText">Portfolio</h1>
        </div>
    
        <body>
            <div className="Osiris-bodybackground">
                <div className="Osiris-bodyContainer">
                    <div className="Osiris-leftBox">
                        <div className="Osiris-imageBox">
                            <YoutubeEmbed embedId='rV92cnscEzI' />
                        </div>
                    </div>

                    <div className="Osiris-rightBox">
                        <h2 className="Osiris-projectTitle">Osiris New Dawn</h2>

                        <h3 className="Osiris-descriptionTitle">Description:</h3>
                        <p className="Osiris-projectDescription">
                            After a major system overhaul to add stability and to prepare for new assets. 
                            I was tasked with fixing issues from old scenes that appeared after the overhaul.
                            Also assisted with adding new systems and assets for new updates.
                        </p>
                        
                        <h3 className="Osiris-linkTitle">Links:</h3>
                        <div className="Osiris-linkDiv">
                            <a href="https://store.steampowered.com/app/402710/Osiris_New_Dawn/" className="Osiris-link" target="_blank">Check it out on Steam</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)};

export default OsirisNewDawn;
