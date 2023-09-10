import './App.css';
import Navbar from './components/Navbar';
import Aboutme from "./components/Aboutme"
import Contact from './components/Contact';
import ParallaxContainer from './components/ParallaxContainer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import data from "./data"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ParallaxContainer/>
        <Aboutme/>
        <Skills/>
        <Projects data={data}/>
        <Contact/>
    </div>
  );
}

export default App;
