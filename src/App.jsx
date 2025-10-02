import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Home from './home.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Projects from './projects.jsx'

function Navigation() {
  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-center divide-x-2"> 
        <Link to="/" className="text-white hover:text-gray-300 px-12">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300 px-12">About</Link>
        <Link to="/projects" className="text-white hover:text-gray-300 px-12">Projects</Link>
        <Link to="/contact" className="text-white hover:text-gray-300 px-12">Contact</Link>
      </div>
    </nav>
  )
}

function Opener() {
  let title = 'Dominic Cimino';
  let description = 'Software Engineering Student | Full-Stack Developer | Problem Solver';
  let logo = './public/logo.png';

  return (
    <>
      <div class="flex flex-col md:flex-row items-center h-[75vh] bg-gradient-to-b from-blue-900 to-black">
        <div class="flex flex-col justify-center gap-4 p-4 w-1/2">
          <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400 text-7xl text-center md:text-start">{title}</h1>
          <p class="text-white text-sm mt-2 text-center md:text-start">{description}</p>
        </div>
        <div className="w-1/2 h-full bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" style={{backgroundImage: `url(${logo})`}}>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Opener />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}