import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import { VertDivider } from '../Components/Divider/Divider';
import OverlayImages from '../Components/Images/OverlayCards/OverlayImages';
import Footer from '../Components/Footer/Footer';

const Home = () => {
return (
	<>
		<div className="index-header">
			<h1 className="index-headerText">
				Front-End Game and Web Developer
			</h1>

			<h2 className="index-subHeaderText">
				Benjamin Navarro
			</h2>
			
			<p className="index-subHeader">
				3 years industry experienced Software Engineer and  Game Developer specializing in UI/UX programming and implementation.
			</p>

			<div>
				<img src="./Images/SplashHome.png" alt="" className="index-splashImage"/>
			</div>
		</div>

		<div className="index-body">
			<div className="index-bodyHeaderBackground">
				<h1 className="index-bodyHeader">
					Ben says hi.
				</h1>

				<p className="index-bodyDescription">
					In my years in the industry I've found a passion for UI/UX development. 
					I have worked in a variety of environments with different Task Management and Source Control software while being remote or in an office. 
					I am adaptable and diligent in my work either solo or with a team. 
				</p>
			</div>

			<div className="index-skillbackground">
				<div className="index-skillContainer">
					<div className="index-skillCard">
						<img className="index-skillImage" src="./Images/GEImage.png" alt="" />
						
						<div className="index-skillHeader">
							<h2>Front-End Game Developer</h2>
						</div>
						

						<p className="index-experienceBlock">
							3 years industry experience with Unity Engine and experience porting projects from Unreal Engine to consoles. 
							Specialized in UI/UX programming, optimization, and implementation as well as general systems programming and some Back-End Development. 
						</p>

						<h3>Related Languages</h3>

						<p className="index-skillsBlock">C#, C++, Javascript</p>

						<h3>Tools</h3>

						<li>Unity</li>
						<li>Git</li>
						<li>Git GUI Clients</li>
						<li>PlasticSCM</li>
						<li>VSCode/Visual Studio</li>
						<li>Jira/Trello</li>
						<li>Slack</li>

					</div>

					<VertDivider />

					<div className="index-skillCard">
						<img className="index-skillImage" src="./Images/WDImage.png" alt="" />

						<div className="index-skillHeader">
							<h2>Web Developer</h2>
						</div>
						
						<p className="index-experienceBlock">
							Experienced with multiple JS Libraries and have multiple years industry experience with UI/UX implementation and programming.
						</p>

						<h3>Related Languages</h3>

						<p className="index-skillsBlock">
							Javascript, HTML5, CSS3, PHP
						</p>

						<h3>Libraries and Tools</h3>

						<li>React.js</li>
						<li>Node.js</li>
						<li>Angular.js</li>
						<li>Wordpress</li>
						<li>Visual Studio Code</li>
						<li>Git</li>
					</div>

					{/* <VertDivider />

					<div className="index-skillCard">	
						<img className="index-skillImage" src="./Images/MUImage.png" alt="" />

						<div className="index-skillHeader">
							<h2>Tarot Card Reader</h2>
						</div>
						

						<p className="index-experienceBlock">
							6 years experience reading cards and fortune for many who are skeptical or interested in many different environments.
							Learned to read Tarot Cards in Florence, Italy among other Readers.
						</p>

						<h3>Related Skill</h3>

						<p className="index-skillsBlock">
							Created fortune teller persona "Madame Universe" to immerse myself into the role. Madame Universe connects with "The Stars" to tell your fortune.
						</p>

						<h3>Tools</h3>

						<li>Tarot Deck</li>
						<li>The Stars</li>
						<li>Hopefully a fog machine</li>
						<li>Silk scarf</li>
					</div> */}
				</div>
			</div>
			
			<div className="index-previousWorkContainer">
				<h1>Previous Works</h1>

				<div className="index-worksContainer">
					{/* <div className="index-workCard">
						<OverlayImages 
							title = "SCE Game Show" 
							body="Collab w/ SCE on team building Gameshow!"
							linkText="Check it out!"
							link="/portfolio/SCEGameshow"
							imageLink="./Images/tempImage.png"
						/>
					</div> */}

					<div className="index-workCard">
						<OverlayImages 
							title = "Full Swing Launch Monitor"
							body=""
							linkText="Check it out their website"
							link="/portfolio/FullSwingLaunchMonitor"
							imageLink="./Images/Projects/LaunchMonitor.jpg"
						/>
					</div>

					<div className="index-workCard">
						<OverlayImages 
							title = "Full Swing Golf Simulator" 
							body=""
							linkText="Check it out their website"
							link="/portfolio/FullSwingGolfSimulator"
							imageLink="./Images/Projects/FullSwingGolfSimulator.jpg"
						/>
					</div>

					<div className="index-workCard">
						<OverlayImages 
							title = "Osiris: New Dawn"
							body=""
							linkText="Check it out on Steam"
							link="/portfolio/OsirisNewDawn"
							imageLink="./Images/Projects/OsirisNewDawn.jpg"
						/>
					</div>

					<div className="index-workCard">
						<OverlayImages 
							title = "Maelstrom"
							body=""
							linkText="Check it out on Steam"
							link="/portfolio/Maelstrom"
							imageLink="./Images/Projects/Maelstrom.jpg"
						/>
					</div>

					<div className="index-detailsButtonContainer">
						<button className="index-moreDetailsButton">
							<Link to="portfolio" className="index-moreDetailsLink">
								Find out more details on the Portfolio page {'>'}
							</Link>
						</button>

					</div>
				</div>
			</div>

			<Footer hasShadow = {true}/>
		</div>
	</>
);};

export default Home;
