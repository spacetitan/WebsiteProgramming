import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import "./contact.css";

import Footer from '../Components/Footer/Footer';
import Popup from '../Components/Tools/Popup';

const Contact = () => {

	const [buttonPopup, setButtonPopup] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	
	const onSubmit = async (data) => 
	{
		const { name, email, message } = data;  
		
		try {
			const templateParams = {
				name,
				email,
				message
			};    
			
			await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			);

			resetForm();
		} catch (e) {
		  console.log(e);
		}
	};

	function resetForm()
	{
		document.getElementById("name").value = '';
		document.getElementById("email").value = '';
		document.getElementById("message").value = '';

		setButtonPopup(true);
	}

return (
	<>
		<div className="contact-header">
			<h1 className="contact-headerText">Contact</h1>
		</div>

		<div>
			<div className="contact-formBackground">
				<div className="contact-formContainer">
					<form action="" id="contact-contactForm" className="contact-contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
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

							<input type="text" id="name"  className="contact-nameInput" {...register('name', {
								required: { value: true, message: 'Please enter your name' },
								maxLength: {
								value: 30,
								message: 'Please use 30 characters or less'
								}
							})} />

							<input type="email" id="email" className="contact-emailInput" {...register('email', {
								required: true,
								pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
							})}/>
						</div>

						{/* <div className="contact-subjectContainer">
							<div className="contact-subjectLabelContainer">
								<label htmlFor="subject" className="contact-subjectLabel">Subject</label>
							</div>
							
							<input type="text" id="contact-subjectInput" className="contact-subjectInput" onChange={onSubjectChange.bind(this)}/>
						</div> */}


						<div className="contact-messegeContainer">
							<div className="contact-messegeLabelContainer">
								<label htmlFor="message" className="contact-messegeLabel">Message</label>
							</div>

							<textarea name="" cols="30" rows="10" id="message" className="contact-messageInput" {...register('message', {
								required: true
							})}></textarea>
						</div>
						
						<div className="contact-buttonContainer">
							<button type="submit" className="contact-submitButton" onClick={handleSubmit}>Submit</button>
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
