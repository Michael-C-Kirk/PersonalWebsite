import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import icon1 from '../images/Foodr.gif'

function Projects() {
    return (
        <div className="projects-grid">
            <div className="card">
                <div className="card-header card-image">
                    <img src={icon1}></img>
                </div>
                <div className="card-title">
                    <p>
                        Foodr
                    </p>
                </div>
                <div className="card-body">
                    <i>
                        HTML/CSS | JavaScript | Python
                    </i>
                    <p>
                        Foodr was developed in a team of 3 which provided users with local restaurants without the need of a search. A decision tree classifier was used to ensure disliked options are shown less frequent in future restaurant retrievals. I was personally in charge of API information retrieval to be displayed to our front end. Google Places and Google Maps were both used to retrieve this information.
                    </p>
                </div>
                <div className="card-footer">
                    <IconContext.Provider value={{ className: "links" }}>
                        <a href="https://github.com/Michael-C-Kirk/Foodr">
                            <BsGithub />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>

            <div className="card">
                <div className="card-header card-image">
                    <img src="https://wallpaperaccess.com/full/1470705.jpg"></img>
                </div>
                <div className="card-title">
                    <p>
                        Project Name
                    </p>
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-footer">
                    <IconContext.Provider value={{ className: "links" }}>
                        <a href="https://github.com/Michael-C-Kirk">
                            <BsGithub />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>

            <div className="card">
                <div className="card-header card-image">
                    <img src="https://wallpaperaccess.com/full/1470705.jpg"></img>
                </div>
                <div className="card-title">
                    <p>
                        Project Name
                    </p>
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-footer">
                    <IconContext.Provider value={{ className: "links" }}>
                        <a href="https://github.com/Michael-C-Kirk">
                            <BsGithub />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>

        </div>
    );
}

export default Projects;