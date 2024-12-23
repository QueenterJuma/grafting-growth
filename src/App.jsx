import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/projects' element={ <Projects/>} />
        <Route path='/team' element={ <Team />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>

      <Header />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
