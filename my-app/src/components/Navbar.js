import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="links">
                <ul>
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70} duration={500}>
                        Home
                    </Link>
                    <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70} duration={500}>
                        Projects
                    </Link>
                    <a href="/technicalskills">Technical Skills</a>
                    <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
                        Contact
                    </Link>
                </ul>
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