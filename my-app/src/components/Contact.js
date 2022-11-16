function Contact() {
    return (
        <div className="contact">
            <div className="contact-card">
                <form className="contact-form">
                    <h2>CONTACT ME</h2>
                    <p type="Name:"><input placeholder="Write your name here.."></input></p>
                    <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                    <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
                    <button>Send Message</button>
                    <div>
                        <span class="fa fa-phone"></span>(916) 547-7787
                        <span class="fa fa-envelope-o"></span> kirkmc@uci.edu
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;