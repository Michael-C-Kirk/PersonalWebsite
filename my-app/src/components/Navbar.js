import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsFillFilePdfFill } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../documents/Michael_Kirk_Resume.pdf";

//Custom Hook that will update screen width
function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return [size];
}

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const linksRef = useRef(null);
    const [windowWidth, setWindowWidth] = useWindowSize();

    useEffect(() => {
        if (windowWidth > 768) {
            linksRef.current.style.transform = ""
            linksRef.current.style.transition = ""
            if (isNavExpanded) {
                setIsNavExpanded(false);
            }
        }

    })

    function animateMobileLinksContainer() {
        if (!isNavExpanded) {
            linksRef.current.style.transform = "translateX(75vw)"
            linksRef.current.style.transition = "transform .5s ease-in-out"
        }
        else {
            linksRef.current.style.transform = "translateX(-75vw)"
            linksRef.current.style.transition = "transform .5s ease-in-out"
        }
    }

    return (
        <nav className="navbar">
            <div className={isNavExpanded ? "hamburger-active" : "hamburger"} onClick={() => { setIsNavExpanded(!isNavExpanded); animateMobileLinksContainer() }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className="links-container">
                <ul className="links" ref={linksRef}>
                    <li>
                        <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-55} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-55} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-55} duration={500}>
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