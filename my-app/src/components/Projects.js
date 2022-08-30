import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";

function Projects() {
    return (
        <div className="projects-grid">
            <div className="card">
                <div className="card-header card-image">
                    <img src="https://wallpaperaccess.com/full/1470705.jpg"></img>
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-footer">
                    <IconContext.Provider value={{ size: "2em", className: "links" }}>
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
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-footer">

                </div>
            </div>

            <div className="card">
                <div className="card-header card-image">
                    <img src="https://wallpaperaccess.com/full/1470705.jpg"></img>
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </div>
    );
}

export default Projects;