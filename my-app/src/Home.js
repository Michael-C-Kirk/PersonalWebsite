import profilepic from './images/GettyMichael.jpg'

function Home() {
    return (
        <div id="home" className="home">
            <div className="title">
                <h1>Hello, I'm Michael Kirk</h1>
            </div>
            <div className='info'>
                <p>
                    Bachelors of Science from the University of California Irvine.
                    <br></br>
                    Seeking full time employment for software engineer and related postions.
                </p>
            </div>
            <div className="profilepic">
                <img src={profilepic}></img>
            </div>
        </div>
    );
}

export default Home;