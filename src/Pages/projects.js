import React from 'react';
import "./projects.css";

import Footer from '../Components/Footer/Footer';
import OverlayImages from '../Components/Images/OverlayCards/OverlayImages';
import PortfolioCards from '../Components/Images/PortfolioCards/PortfolioCards';

const Projects = () => {
return (
	<>
		<header>
			<h1 className="headerText">Portfolio</h1>

			<p className="subHeader">

			</p>
		</header>

		<body>
			<h1>Header</h1>
			
			<div className="cardContainer">
				<PortfolioCards 
				title = "Bungus"
				body = "Bungus"
				link = ""
				linkText = "bungus"
				imageLink = "./Images/tempImage.png"
				/>
			</div>
			<Footer />
		</body>
	</>
);};

export default Projects;
