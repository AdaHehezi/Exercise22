import logo from './logo.svg';
import './App.css';
import About from './component/About';
import DigiNav from './component/DigiNav';
import TechSkills from './component/TechSkills';
import Projects from './component/Projects';
import Achieves from './component/Achieves';
import Contact from './component/Contact';
import Acads from './component/Acads';
import DigiFooter from './component/DigiFooter';

function App() {
  return (
    <div className="App">
      <DigiNav/>
      <About/>
      <Acads/>
      <TechSkills/>
      <Projects/>
      <Achieves/>
      <Contact/>
      <DigiFooter/>
    </div>
  );
}

export default App;
