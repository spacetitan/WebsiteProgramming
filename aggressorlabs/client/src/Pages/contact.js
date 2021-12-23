import React, { useState } from 'react';
import "./contact.css";

import Footer from '../Components/Footer/Footer';
import Popup from '../Components/Tools/Popup';

const Contact = () => {

	var contactInfo = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const [buttonPopup, setButtonPopup] = useState(false);

	function handleSubmit(e) 
	{
		e.preventDefault();
		
		fetch('http://localhost:3001/send', {
			method: "POST",
			body: JSON.stringify(contactInfo),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			}).then(
			(response) => (response.json())
			).then((response)=> {
			if (response.status === 'success') {
			alert("Message Sent.");
			this.resetForm()
			} else if(response.status === 'fail') {
			alert("Message failed to send.")
			}
		})
	}

	// function handleSubmit(event) 
	// {
	// 	event.preventDefault();
	// 	console.log(contactInfo);
	// 	resetForm();
	// }

	function resetForm()
	{
		contactInfo.name = '';
		contactInfo.email = '';
		contactInfo.subject = '';
		contactInfo.message = '';

		document.getElementById("contact-nameInput").value = '';
		document.getElementById("contact-emailInput").value = '';
		document.getElementById("contact-subjectInput").value = '';
		document.getElementById("contact-messageInput").value = '';

		setButtonPopup(true);
	}

	function onNameChange(event) 
	{
		contactInfo.name = event.target.value;
	}
	
	function onEmailChange(event) 
	{
		contactInfo.email = event.target.value;
	}

	function onSubjectChange(event)
	{
		contactInfo.subject = event.target.value;
	}
	
	function onMessageChange(event) 
	{
		contactInfo.message = event.target.value;
	}

return (
	<>
		<div className="contact-header">
			<h1 className="contact-headerText">Contact</h1>
		</div>

		<div>
			<div className="contact-formBackground">
				<div className="contact-formContainer">
					<form action="" id="contact-contactForm" className="contact-contactForm" onSubmit={handleSubmit.bind(this)} method="POST">
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

							<input type="text" id="contact-nameInput"  className="contact-nameInput"  onChange={onNameChange.bind(this)}/>
							<input type="email" id="contact-emailInput" className="contact-emailInput" onChange={onEmailChange.bind(this)}/>
						</div>

						<div className="contact-subjectContainer">
							<div className="contact-subjectLabelContainer">
								<label htmlFor="subject" className="contact-subjectLabel">Subject</label>
							</div>
							
							<input type="text" id="contact-subjectInput" className="contact-subjectInput" onChange={onSubjectChange.bind(this)}/>
						</div>


						<div className="contact-messegeContainer">
							<div className="contact-messegeLabelContainer">
								<label htmlFor="message" className="contact-messegeLabel">Message</label>
							</div>

							<textarea name="" id="" cols="30" rows="10" id="contact-messageInput" className="contact-messageInput" onChange={onMessageChange.bind(this)}></textarea>
						</div>
						
						<div className="contact-buttonContainer">
							<button type="submit" className="contact-submitButton" >Submit</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>

		<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
			<h2>Message Sent</h2>
			<p>Thanks for sending me something!</p>
		</Popup>
	</>
);};

export default Contact;
