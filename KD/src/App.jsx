import './App.css'
import smoothscroll from 'smoothscroll-polyfill';
// import Navbar from './components/navbar'
import HomePage from './pages/homepage'
import Dock from './components/Dock'
import Publications from './pages/publications'
import Projects from './pages/projects'
import CV from './pages/cv'
import Skills from './components/skill';

function App() {
  smoothscroll.polyfill();
  return (
    <>
    {/* <Navbar/> */}
    <section id="home">
          <HomePage />
        </section>
        <Skills/>
        <section id="publications">
          <Publications />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="cv">
          <CV />
        </section>
    <Dock/>
    </>
  )
}

export default App
