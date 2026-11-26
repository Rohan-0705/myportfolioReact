import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import { aboutData, education, skills, projectList } from './data.js'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <BrowserRouter>
       <Navbar />
          <Routes>
               <Route path="/" element = {<Header />} />
               <Route path="/about" element = {<AboutMe aboutData = {aboutData} />} />
               <Route path="/education" element = {<Education edu = {education} />} />
               <Route path="/projects" element = {<Projects pro = {projectList} />} />
               <Route path="/skills" element = {<Skills skills = {skills} />} />
          </Routes>
       <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
