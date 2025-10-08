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
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 flex flex-col items-center gap-6 shadow-lg text-center">
          {/* Centered text content */}
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400 leading-tight">
              {title}
            </h1>
            <p className="text-gray-200 mt-3 md:mt-4 text-sm md:text-base">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">React</span>
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">Node.js</span>
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">Tailwind</span>
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">Full-Stack</span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link to="/projects" className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90">View Projects</Link>
              <Link to="/contact" className="inline-block border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/5">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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