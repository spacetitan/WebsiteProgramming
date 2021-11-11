import React from 'react';
import "./contact.css";

import Footer from '../Components/Footer/Footer';

const Contact = () => {
return (
	<>
		<header>
			<div className="contactHeader">

			</div>
		</header>

		<body>
			<div className="formBackground">
				<div className="formContainer">
					{/* <form action="" className="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
					<form action="" className="contactForm">
						<div className="idContainer">
							<div className="leftContainer">
								<label htmlFor="name" className="nameLabel">Name</label>
							</div>

							<div className="rightContainer">
								<label htmlFor="email" className="emailLabel">Email</label>
							</div>

							<input type="text" className="nameInput" />
							<input type="email" className="emailInput" />
						</div>

						<div className="subjectContainer">
							<div className="subjectLabelContainer">
								<label htmlFor="subject" className="subjectLabel">Subject</label>
							</div>
							
							<input type="text" className="subjectInput" />
						</div>


						<div className="messegeContainer">
							<div className="messegeLabelContainer">
								<label htmlFor="message" className="messegeLabel">Message</label>
							</div>

							<textarea name="" id="" cols="30" rows="10" className="messageInput"></textarea>
						</div>
						
						<div className="buttonContainer">
							<button type="submit" className="submitButton" >Send</button>
						</div>
					</form>
				</div>
			</div>


			<Footer />
		</body>
	</>
);};

export default Contact;
