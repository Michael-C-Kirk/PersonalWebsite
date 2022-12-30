import profilepic from '../images/MichaelPhoto.png'

function Home() {
    return (
        <div className="home">
            <div className='greeting-card'>
                <div className='greeting'>
                    <h1>Hello, I'm</h1>
                    <h1>Michael Kirk</h1>
                    <br></br>
                    <p>
                        BSc in Computer Game Science from UC Irvine.
                        <br></br>
                        Seeking full time employment for entry-level software engineer and related postions.
                    </p>
                </div>
            </div>
            <div className='profile-pic-container'>
                <div className="profile-pic">
                    <img src={profilepic}></img>
                </div>
            </div>
        </div>
    );
}

export default Home;