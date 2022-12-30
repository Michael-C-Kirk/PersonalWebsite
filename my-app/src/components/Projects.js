import { IconContext } from "react-icons";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import icon1 from '../images/Foodr.gif'
import icon2 from '../images/AloneTogether.jpg'
import icon3 from '../images/ARMLogo.jpg'
import icon4 from '../images/TreatYoSelf.png'

function Projects() {
    var tf_idf = <a href="https://en.wikipedia.org/wiki/Tf%E2%80%93idf">TF-IDF</a>
    return (
        <div className="projects-section">

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
                            Python | JavaScript | HTML | Bootstrap
                        </i>
                        <br></br>
                        <br></br>
                        <p>
                            Foodr, an homage to apps such as Tinder, was designed to provide users with local restaurants without the need of using a traditional search bar.
                            Users are provided with a thumbs up and thumbs down button to train our machine learning algorithm in providing more accurate results.
                            A decision tree classifier was used to ensure disliked options are shown less frequent in future restaurant retrievals.
                        </p>
                        <br></br>
                        <p>
                            I integrated the API information retrieval to create a database of hundreds of restaurant preferences.
                            Google Places was used to determine a user's location while Google Maps was used to retrieve restaurant data.
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
                        <img src={icon2}></img>
                    </div>
                    <div className="card-title">
                        <p>
                            Alone Together
                        </p>
                    </div>
                    <div className="card-body">
                        <i>
                            C# | Unity | Git
                        </i>
                        <br></br>
                        <br></br>
                        <p>
                            Alone Together is a couch co-op rouge-like game that focuses on replayability.
                            Each player takes on the role of a cyborg bound together by a single life force and are tasked with stopping a robotic uprising on Earth.
                        </p>
                        <br></br>
                        <p>
                            The player combat system was one of my main focuses early on into development.
                            Our end result included both active and passive player abilities that could be interchanged to create various playstyles.
                            Map piece optimizations were made using a mesh baking technique that reduced the overall gpu load.
                            Interactable objects we developed for players to get temporary buffs as they explored each map piece.
                        </p>
                        <br></br>
                        <p>
                            A decision made as a team was to take the development cycle of this game seriously.
                            We came up with an agile development cycle with bi-weekly standup meetings.
                            Bug triaging was introduced during late development to distinguish game breaking bugs from nice to have features.
                            Rapid prototyping was our main means of enhancing our game over time by getting as much feedback as we could through others playtesting our stable builds.
                        </p>
                    </div>
                    <div className="card-footer">
                        <IconContext.Provider value={{ size: "1.25em", className: "links" }}>
                            <a href="https://supriseorb.itch.io/alone-together">
                                <BsLink45Deg />
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header card-image">
                        <img src={icon3}></img>
                    </div>
                    <div className="card-title">
                        <p>
                            ARM
                        </p>
                    </div>
                    <div className="card-body">
                        <i>
                            Python | Flask | NLTK
                        </i>
                        <br></br>
                        <br></br>
                        <p>
                            ARM is a search engine built with a corpus of UC Irvine related URLs.
                            It provides completely accurate results from a user entered query.
                        </p>
                        <br></br>
                        <p>
                            The corpus houses hundreds of URLs.
                            An inverted index was created to store word counts for each of these URLs.
                            This inverted index also cut down the time needed for our search engine to display results.
                            A {tf_idf} weighting system was implemented to score the relevancy of every word within our inverted index.
                            Heuristics were used to better weigh each word, giving higher weights to words found in headings.
                        </p>
                        <br></br>
                        <p>
                            Natural language toolkit was used for addressing stop words within our inverted index.
                            The main functionality of this was to reduce the size of our database which also lead to a reduced time displaying results to our user.
                            We then wrapped all this functionality into a basic Flask application, taking UI inspiration from Google search engine.
                        </p>
                    </div>
                    <div className="card-footer">
                        <IconContext.Provider value={{ className: "links" }}>
                            <a href="https://github.com/aanimesh23/SearchEngine">
                                <BsGithub />
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header card-image">
                        <img src={icon4}></img>
                    </div>
                    <div className="card-title">
                        <p>
                            TreatYoSelf
                        </p>
                    </div>
                    <div className="card-body">
                        <i>Swift | SQLite</i>
                        <br></br>
                        <br></br>
                        <p>
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
        </div>
    );
}

export default Projects;