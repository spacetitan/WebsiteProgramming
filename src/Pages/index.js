import React from 'react';
import './index.css';

import { VertDivider } from '../Components/Divider/Divider';
import OverlayImages from '../Components/Images/OverlayCards/OverlayImages';
import Footer from '../Components/Footer/Footer';

const Home = () => {
return (
	<>
		<div className="indexHeader">
			<h1 className='headerText'>
				Front End Game Dev and Full Stack Web Dev
			</h1>
			
			<p className="subHeader">
				3 years industry experienced Software Engineer and  Game Developer specializing in UI/UX programming and implementation.
			</p>

			<div>
				<img src="./Images/tempImage.png" alt="" className="indexHeaderImage"/>
			</div>
		</div>

		<body className='body'>
			<div>
				<h1 className="bodyHeader">
					Ben says hi.
				</h1>

				<p className="bodyDescription">
					In my years in the industry I've found a passion for UI/UX development. 
					I have worked in a variety of environments with different Task Management and Source Control software while being remote or in an office. 
					I am adaptable and diligent in my work either solo or with a team. 
				</p>
			</div>

			<div className="skillbackground">
				<div className="skillContainer">
					<div className="skillCard">
						<img className="skillImage" src="./Images/GEImage.png" alt="" />
						
						<div className="skillHeader">
							<h2>Front End Game Developer</h2>
						</div>
						

						<p className="experienceBlock">
							3 years industry experience with Unity Engine and experience porting projects from Unreal Engine to consoles. 
							Specialized in UI/UX programming, optimization, and implementation as well as general systems programming and some Backend Development. 
						</p>

						<h3>Related Languages</h3>

						<p className="skillsBlock">C#, C++, Java</p>

						<h3>Tools</h3>

						<li>Git</li>
						<li>GitHub</li>
						<li>GitLab</li>
						<li>PlasticSCM</li>
						<li>Scriptable Object</li>
						<li>Visual Studios</li>
						<li>Jira</li>
						<li>Slack</li>

					</div>

					<VertDivider />

					<div className="skillCard">
						<img className="skillImage" src="./Images/WDImage.png" alt="" />

						<div className="skillHeader">
							<h2>Full Stack Web Developer</h2>
						</div>
						
						<p className="experienceBlock">
							Experienced with multiple JS Libraries including React, multiple years industy experience with UI/UX implementation and programming.
						</p>

						<h3>Related Languages</h3>

						<p className="skillsBlock">
							Javascript, HTML, CSS, PHP
						</p>

						<h3>Libraries and Tools</h3>

						<li>React.js</li>
						<li>Node.js</li>
						<li>Angular.js</li>
						<li>Wordpress</li>
						<li>Visual Studio Code</li>
						<li>Git</li>
					</div>

					<VertDivider />

					<div className="skillCard">	
						<img className="skillImage" src="./Images/MUImage.png" alt="" />

						<div className="skillHeader">
							<h2>Tarot Card Reader</h2>
						</div>
						

						<p className="experienceBlock">
							6 years experience reading cards and fortune for many who are skeptical or interested in many different enviroments. 
							Learned to read Tarot Cards in Florence, Italy among other Readers.
						</p>

						<h3>Related Skill</h3>

						<p className="skillsBlock">
							Created fotrune teller persona "Madame Universe" to immerse myself into the role. Madame Universe connects with "The Stars" to tell your fortune.
						</p>

						<h3>Tools</h3>

						<li>Tarot Deck</li>
						<li>The Stars</li>
						<li>Hopefully a fog machine</li>
						<li>Silk scarf</li>
						<li>Alcohol</li>
					</div>
				</div>
			</div>
			
			<div className="previousWorkContainer">
				<h1>Previous Works</h1>

				<div className="worksContainer">
					<div className="workCard">
						<OverlayImages 
							title = "Full Swing Golf Simulator" 
							body="Worked on processing and tweaking satellite data to create terrain for courses, UI/UX implementation, parsing camera data for replay, and general programming."
							linkText="Check it out there website"
							link="https://www.fullswinggolf.com/golf-simulator/"
							imageLink="./Images/FullSwingGolfSimulator.jpg"
						/>
					</div>

					<div className="workCard">
						<OverlayImages 
							title = "Full Swing Launch Moniter"
							body="Implemented UI/UX for general navigation and to display data recieved from sensor on phone application."
							linkText="Check it out there website"
							link="https://www.fullswinggolf.com/kit-launch-monitor/"
							imageLink="./Images/Launch Monitor.jpg"
						/>
					</div>

					<div className="workCard">
						<OverlayImages 
							title = "PokerGo Holdem" 
							body="Worked on restructuring existing engine to work with new rules, and assets. Also worked on implementing UI/UX and VFX as well as a lot of bug fixing caused by issues with oudated engine."
							linkText="Check it out on the Google appstore"
							link="https://play.google.com/store/apps/details?id=com.PokerGO.Holdem&hl=en_US&gl=US"
							imageLink="./Images/PokerGOHoldEm.png"
						/>
					</div>

					<div className="workCard">
						<OverlayImages 
							title = "Osiris New Dawn"
							body="Focused on fixing game breaking issues after core system restructuring, new system additions and new asset introductions."
							linkText="Check it out on Steam"
							link="https://store.steampowered.com/app/402710/Osiris_New_Dawn/"
							imageLink="./Images/OsirisNewDawn.jpg"
						/>
					</div>

					<div className="workCard">
						<OverlayImages 
							title = "Maelstrom"
							body="Worked on restructuring UI/UX for Controller support. Also worked on fulfilling requirement needed for console release."
							linkText="Check it out on Steam"
							link="https://store.steampowered.com/app/764050/Maelstrom/"
							imageLink="./Images/Maelstrom.jpg"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</body>
	</>
);};

export default Home;
