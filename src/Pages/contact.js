import React from 'react';
import "./contact.css";

import Footer from '../Components/Footer/Footer';

const Contact = () => {
return (
	<>
		<div className="contact-header">
			<h1 className="contact-headerText">Contact</h1>
		</div>

		<body>
			<div className="contact-formBackground">
				<div className="contact-formContainer">
					{/* <form action="" className="contact-contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
					<form action="" className="contact-contactForm">
						<div className="contact-descriptionContainer">
							<p className="contact-descriptionText">
								Thanks for taking the time to reach out. How can I help you today?
							</p>
						</div>

						<div className="contact-idContainer">
							<div className="contact-leftContainer">
								<label htmlFor="name" className="contact-nameLabel">Name</label>
							</div>

							<div className="contact-rightContainer">
								<label htmlFor="email" className="contact-emailLabel">Email</label>
							</div>

							<input type="text" className="contact-nameInput" />
							<input type="email" className="contact-emailInput" />
						</div>

						<div className="contact-subjectContainer">
							<div className="contact-subjectLabelContainer">
								<label htmlFor="subject" className="contact-subjectLabel">Subject</label>
							</div>
							
							<input type="text" className="contact-subjectInput" />
						</div>


						<div className="contact-messegeContainer">
							<div className="contact-messegeLabelContainer">
								<label htmlFor="message" className="contact-messegeLabel">Message</label>
							</div>

							<textarea name="" id="" cols="30" rows="10" className="contact-messageInput"></textarea>
						</div>
						
						<div className="contact-buttonContainer">
							<button type="submit" className="contact-submitButton" >Submit</button>
						</div>
					</form>
				</div>
			</div>


			<Footer />
		</body>
	</>
);};

export default Contact;
