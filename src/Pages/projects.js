import React from 'react';
import "./projects.css";

import Footer from '../Components/Footer/Footer';
import PortfolioCards from '../Components/Images/PortfolioCards/PortfolioCards';

const Projects = () => {
return (
	<>
		<div className="portfolio-header">
			<h1 className="portfolio-headerText">Portfolio</h1>

			<p className="portfolio-subHeader">

			</p>
		</div>

		<body>
			<div className="portfolio-releasedProjectsBackground">
				
				<div className="portfolio-releasedProjectsHeader">
					<h1>Released Projects</h1>
				</div>

				<div className="portfolio-releasedProjectsContainer">
					{/* <div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Template"
							body = "This is a template"
							link = "template"
							linkText = "more details"
							imageLink = "./Images/tempImage.png"
						/>
					</div> */}

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Full Swing Golf Simulator"
							body = "Worked on processing and tweaking satellite data to create terrain for courses, UI/UX implementation, parsing camera data for replay, and general programming."
							link = "FullSwingGolfSimulator"
							linkText = "More Details"
							imageLink = "./Images/Projects/FullSwingGolfSimulator.jpg"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Full Swing Launch Monitor"
							body = "Implemented UI/UX for general navigation and to display data received from a sensor to a phone application."
							link = "FullSwingLaunchMonitor"
							linkText = "More Details"
							imageLink = "./Images/Projects/Launch Monitor.jpg"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Poker GO Holdem"
							body = "Worked on restructuring existing engine to work with a set of new rules, and assets. Also worked on implementing UI/UX and VFX as well as a lot of bug fixing caused by issues with outdated engine."
							link = "PokerGoHoldEm"
							linkText = "More Details"
							imageLink = "./Images/Projects/PokerGOHoldEm.png"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Osiris: New Dawn"
							body = "Focused on fixing game breaking issues after core system restructuring, new system additions and new asset introductions."
							link = "OsirisNewDawn"
							linkText = "More Details"
							imageLink = "./Images/Projects/OsirisNewDawn.jpg"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Maelstrom"
							body = "Worked on restructuring UI/UX for Controller support. Also worked on fulfilling requirement needed for a console release."
							link = "Maelstrom"
							linkText = "More Details"
							imageLink = "./Images/Projects/Maelstrom.jpg"
						/>
					</div>
				</div>
			</div>
			<div className="portfolio-personalProjectsBackground">

				<div className="portfolio-personalProjectsHeader">
					<h1>Personal Projects</h1>
				</div>

				<div className="portfolio-personalProjectsContainer">

					{/* <div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Template"
							body = "This is a template"
							link = "template"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div> */}

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "TPMS"
							body = "A third person mech shooter with switchable loadouts that I have been working on off and on for years."
							link = "TPMS"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "FPPCH"
							body = "A first person point and click horror game where everything moves when you do."
							link = "FPPCH"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Bumper Balls"
							body = "A simple Minigame in which you try to push the other balls off a platform."
							link = "BumperBalls"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>

					<div className="portfolio-cardContainer">
						<PortfolioCards 
							title = "Cowboy Shooter"
							body = "A simple shooter where you only have one bullet."
							link = "CowboyShooter"
							linkText = "More Details"
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
