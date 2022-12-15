import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    function handleSubmit(event) {
        event.preventDefault()

        emailjs.sendForm('service_fv1hqki', 'template_8561ou3', form.current, 'CMEqEOQFYW767QDso')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="contact">
            <div className="contact-card">
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <h2>CONTACT ME</h2>
                    <p type="Name:"><input placeholder="Jane Doe" name="name" ></input></p>
                    <p type="Email:"><input placeholder="JaneDoe@gmail.com" name="email"></input></p>
                    <p type="Message:"><textarea id="messageBox" placeholder="Let me know if my skills align with an open role in your organization" name="message" ></textarea></p>
                    <button onClick={handleSubmit}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;