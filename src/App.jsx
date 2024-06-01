import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact/Contaact'
import Projects from './Components/Projectss/Projects'



function App() {
  return (
    <div className='containerrr'>
      <Nav />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
