import React from 'react';
import { VertDivider } from '../Components/Divider/Divider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import OverlayImages from '../Components/Images/OverlayImages/OverlayImages';

const Home = () => {
	return (
		<>
			<header className='header'>
				<h1 className='headerText'>
					Front End Game Dev and Full stack Web Dev
				</h1>
				
				<p className="subHeader">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				</p>

				<div>
					<img src="./Images/tempImage.png" alt="" />
				</div>
			</header>

			<body className='body'>
				<h1 className="bodyHeader">
					Benjamin Navarro
				</h1>

				<p className="bodyDescription">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<div className="skillContainer">
					<div className="skillCard">
						<img className="skillImage" src="./Images/tempImage.png" alt="" />

						<h2>Front End Game Developer</h2>

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

					</div>

					<VertDivider />

					<div className="skillCard">
						<img className="skillImage" src="./Images/tempImage.png" alt="" />

						<h2>Full Stack Web Developer</h2>

						<p className="experienceBlock">
							-Experience- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</p>

						<h3>Related Skill</h3>

						<p className="skillsBlock">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>

						<h3>Tools</h3>

						<li>item</li>
						<li>item</li>
						<li>item</li>
						<li>item</li>
					</div>

					<VertDivider />

					<div className="skillCard">	
						<img className="skillImage" src="./Images/tempImage.png" alt="" />

						<h2>Tarot Card Reader</h2>

						<p className="experienceBlock">
							-Experience- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</p>

						<h3>Related Skill</h3>

						<p className="skillsBlock">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>

						<h3>Tools</h3>

						<li>item</li>
						<li>item</li>
						<li>item</li>
						<li>item</li>
					</div>
				</div>
				
				<div className="previousWorkContainer">
					<h1>Previous Works</h1>

					<div className="worksContainer">
						<div className="workCard">
							<OverlayImages 
								title = "Full Swing Golf Simulator" 
								body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
								linkText="Check out there website"
								link="https://www.fullswinggolf.com/"
								imageLink="./Images/FullSwingGolfSimulator.jpg"
							/>
						</div>

						<div className="workCard">
							<OverlayImages 
								title = "PokerGo Holdem" 
								body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
								linkText="Check it out on the appstore"
								link="https://play.google.com/store/apps/details?id=com.PokerGO.Holdem&hl=en_US&gl=US"
								imageLink="./Images/PokerGOHoldEm.png"
							/>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};

export default Home;
