import { useState, useRef } from "react";

function Contact() {
    const [inputFields, setInputFields] = useState({ name: "", email: "", message: "" })
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(name, email, message);
    }

    function handleChange(event) {
        var tempName = event.target.name
        var tempValue = event.target.value
        if (tempName === "name") {
            setName(tempValue)
        }
        else if (tempName === "email") {
            setEmail(tempValue)
        }
        else {
            setMessage(tempValue)
        }
    }

    return (
        <div className="contact">
            <div className="contact-card">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <h2>CONTACT ME</h2>
                    <p type="Name:"><input placeholder="Jane Doe" name="name" value={name} onChange={handleChange}></input></p>
                    <p type="Email:"><input placeholder="JaneDoe@gmail.com" name="email" value={email} onChange={handleChange}></input></p>
                    <p type="Message:"><textarea id="messageBox" placeholder="Let me know if my skills align with an open role in your organization" name="message" value={message} onChange={handleChange}></textarea></p>
                    <button onClick={handleFormSubmit}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;