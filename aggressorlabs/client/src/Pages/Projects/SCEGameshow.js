import React from 'react';
import './SCEGameshow.css';
import {saveAs} from "file-saver";

import Footer from '../../Components/Footer/Footer';

const ZIPURL = "https://aggressorlabs.com/SCEGBuild.zip"
const ZIPURLTEST = "http://localhost:3000/SCEGBuild.zip";

function SCEGameshow() {

const saveFile = () => {
    saveAs("/SCEGBuild.zip", "SCEGBuild.zip");
}

return (
<>
    <header>
        <div className="SCEGameshow-header">
            <h1 className="SCEGameshow-headerText">Portfolio</h1>
       </div>
    </header>
   
    <div>
        <div className="SCEGameshow-bodybackground">
            <div className="SCEGameshow-bodyContainer">
                <div className="SCEGameshow-backButtonContainer">
                        <a href="/portfolio" className="SCEGameshow-backButton">{String.fromCharCode(8592)}Back to portfolio</a>
                </div>

                <div className="SCEGameshow-leftBox">
                    <img src='../Images/Projects/SCEGameshow2.png' alt="Error loading image" className="SCEGameshow-projectImage" /><image/>
                </div>

                <div className="SCEGameshow-rightBox">
                    <h1 className="SCEGameshow-projectTitle">Southern California Edison Gameshow</h1>

                    <h2 className="SCEGameshow-descriptionTitle">Description</h2>
                    <p className="SCEGameshow-projectDescription">
                        Collaborated with an engineer at Southern California Edison to create a team building game inspired by the last round of Family Feud.
                        The game is designed to have someone running the game and inputting the answers said by contestants. 
                        Most answers are changed to protect sensitive information of SCE employees.
                        The top answers are in a text file in the Zip.
                    </p>
                    
                    <h2 className="SCEGameshow-linkTitle">Links</h2>
                    {/* <div className='SCEGameshow-linkDiv'><button onClick={() => {downloadFileAtURL(ZIPURL)}} className="SCEGameshow-button">Download the Zip</button></div> */}
                    <a className='SCEGameshow-link' href='https://aggressorlabs.com/SCEGBuild.zip'>Download the Zip</a>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</>
);}

export default SCEGameshow;

