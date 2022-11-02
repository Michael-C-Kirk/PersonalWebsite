import { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsFillFilePdfFill } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../documents/Michael_Kirk_Resume.pdf";

function Navbar(props) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className={isNavExpanded ? "links-container-active" : "links-container"}>
                <ul className="links">
                    <li>
                        <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-50} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-50} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li><a href="/technicalskills">Technical Skills</a></li>
                    <li>
                        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-50} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="socials">
                <IconContext.Provider value={{ className: "github" }}>
                    <a href="https://github.com/Michael-C-Kirk">
                        <BsGithub />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "linkedin" }}>
                    <a href="https://www.linkedin.com/in/michael-c-kirk/">
                        <BsLinkedin />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "resume" }}>
                    <a href={resume}>
                        <BsFillFilePdfFill />
                    </a>
                </IconContext.Provider>

            </div>
        </nav >
    );
}

export default Navbar;