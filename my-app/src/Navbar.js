import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/technicalskills">Technical Skills</a>
                <a href="/contact">Contact</a>
            </div>

            <div className="socials">
                <IconContext.Provider value={{ className: "icons" }}>
                    <a href="https://github.com/Michael-C-Kirk">
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-kirk-4211a0152/">
                        <BsLinkedin />
                    </a>
                </IconContext.Provider>
            </div>
        </nav>
    );
}

export default Navbar;