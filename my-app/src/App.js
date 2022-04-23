import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='Home'>
        <Home />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
