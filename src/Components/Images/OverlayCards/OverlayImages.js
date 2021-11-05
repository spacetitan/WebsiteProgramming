import React from 'react';
import './OverlayImages.css';

const OverlayImages = ({title, body, linkText, link, imageLink}) =>
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

            <a href={checkLink} target="_blank" className="workLink"><button className="linkButton">{checkLinkText}</button></a>
            
        </div>
    </div>
);}

export default OverlayImages;