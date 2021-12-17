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
    <div className="overlayImage-imageBox">
        <img src={checkImage} alt="" className="overlayImage-workImage" />

        <div className="overlayImage-overlay">
            <h2>{checkTitle}</h2>

            <p>{checkBody}</p>

            <a href={checkLink} target="_blank" className="overlayImage-workLink"><button className="overlayImage-linkButton">{checkLinkText}</button></a>
            
        </div>
    </div>
);}

export default OverlayImages;