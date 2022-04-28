import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='Home'>
        <Home />
      </div>

      <div className='Projects'>
        <Projects />
      </div>

      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
