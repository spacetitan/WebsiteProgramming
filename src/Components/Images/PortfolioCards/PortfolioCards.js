import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioCards.css';

const PortfolioCards = ({title, body, linkText, link, imageLink}) =>
{
    const checkTitle = title == null ? "Need Title" : title;
    const checkBody = body == null ? "Need Body" : body;
    const checkLinkText = linkText == null ? "Need Link Text" : linkText + " >";
    const checkLink = link == null ? "./Images/tempImage.png" : link;
    const checkImage = imageLink == null ? "" : imageLink;

return(
    <div className="imageBox">
        <img src={checkImage} alt="" className="workImage" />

        <div className="overlay">
            <h2>{checkTitle}</h2>

            <p>{checkBody}</p>

            <Link to={checkLink} target="_blank" className="workLink">
                <button className="linkButton">{checkLinkText}</button>
            </Link>
            
        </div>
    </div>
);}

export default PortfolioCards;