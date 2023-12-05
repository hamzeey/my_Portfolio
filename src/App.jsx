import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projectss/Projects'



function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skill />

      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
