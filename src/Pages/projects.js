import React from 'react';
import "./projects.css";

import Footer from '../Components/Footer/Footer';
import PortfolioCards from '../Components/Images/PortfolioCards/PortfolioCards';

const Projects = () => {
return (
	<>
		<div className="projectHeader">
			<h1 className="headerText">Portfolio</h1>

			<p className="subHeader">

			</p>
		</div>

		<body>
			<div className="projectsBackground">
				<div className="projectsContainer">

					<div className="cardContainer">
						<PortfolioCards 
						title = "Template"
						body = "This is a template"
						link = "template"
						linkText = "check out the template"
						imageLink = "./Images/tempImage.png"
						/>
					</div>

				</div>
			</div>
			
			
			<Footer />
		</body>
	</>
);};

export default Projects;
