import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioCards.css';

const PortfolioCards = ({title, body, linkText, link, imageLink}) =>
{
    const checkTitle = title == null ? "Need Title" : title;
    const checkBody = body == null ? "Need Body" : body;
    const checkLinkText = linkText == null ? "Need Link Text" : linkText + " >";
    const checkLink = link == null ? "" : "/portfolio/" + link;
    const checkImage = imageLink == null ? "./Images/tempImage.png" : imageLink;

return(
    <div className="portfolioCard-imageBox">
        <img src={checkImage} alt="" className="portfolioCard-workImage" />

        <div className="portfolioCard-overlay">
            <h2>{checkTitle}</h2>

            <p>{checkBody}</p>

            <Link to={checkLink} className="portfolioCard-link">
                <button className="portfolioCard-button">{checkLinkText}</button>
            </Link>
            
        </div>
    </div>
);}

export default PortfolioCards;