import './index.css';

const projects = [
  {
    title: "Personal Portfolio Website",
    period: "Summer 2025 - Present",
    technologies: ["React", "Tailwind CSS", "Node.js", "GPT-4"],
    description: "Designed and developed a responsive personal portfolio site to showcase projects and skills.",
    highlights: [
      "Implemented React/Tailwind front-end with modern UI components",
      "Built Node.js backend for dynamic content management",
      "Achieved fully responsive design across all device sizes",
      "Improved proficiency in modern full-stack development"
    ],
    github: "https://github.com/rhit-ciminodj",
    live: null,
    status: "In Progress"
  },
  {
    title: "Angular Web Application",
    period: "Spring 2025",
    technologies: ["Angular", "MongoDB", "Express", "IndexDB"],
    description: "Built a modular front-end with Angular and a MEAN stack backend for dynamic data handling.",
    highlights: [
      "Developed modular Angular components with TypeScript",
      "Integrated MongoDB database with Express.js API",
      "Implemented client-side IndexDB for offline functionality",
      "Deployed to virtual machine learning full-stack architecture"
    ],
    github: "https://github.com/rhit-csse280/final-project-angularmanager",
    live: null,
    status: "Completed"
  },
  {
    title: "Verilog Processor Design",
    period: "Spring 2025",
    technologies: ["RiSC-V", "Verilog", "Git"],
    description: "Collaborated with teammates to design and implement both regular and pipelined processors.",
    highlights: [
      "Designed CPU architecture using RiSC-V instruction set",
      "Implemented pipelined processor with hazard detection",
      "Collaborated effectively using Git version control",
      "Strengthened understanding of clock cycles and CPU architecture"
    ],
    github: "https://github.com/rhit-csse232/pipelined-processor-mangosteen",
    live: null,
    status: "Completed"
  },
  {
    title: "Algorithms Report & Implementation",
    period: "Spring 2025",
    technologies: ["Java", "Eclipse", "Git"],
    description: "Implemented Kruskal's MST algorithm and analyzed time/space complexity.",
    highlights: [
      "Developed efficient graph algorithm implementation",
      "Conducted comprehensive time and space complexity analysis",
      "Co-authored detailed technical documentation",
      "Gained practical experience with advanced data structures"
    ],
    github: "https://github.com/rhit-ciminodj/230GraphProject",
    live: null,
    status: "Completed"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'In Progress' 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {project.status}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{project.period}</p>
        <p className="text-gray-700 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-600 text-sm flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 text-sm"
            >
              View Code
            </a>
          )}
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300 text-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-black to-blue-900 text-white py-16 px-4 rounded-b-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
            My Projects
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            A showcase of my software development journey, from web applications to system-level programming.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Additional Experience Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Additional Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900 to-black text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Competitive Programming</h3>
              <p className="text-sm mb-3">Rose-Hulman Team Member | Fall 2025 - Present</p>
              <ul className="space-y-2 text-sm">
                <li>• Weekly practice sessions solving advanced algorithmic problems</li>
                <li>• Participate in regional programming competitions</li>
                <li>• Strengthen team collaboration and debugging skills</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Combat Robotics Club</h3>
              <p className="text-sm mb-3">Active Member | Fall 2024 - Present</p>
              <ul className="space-y-2 text-sm">
                <li>• Design and construction of combat robots</li>
                <li>• Mechanical and electrical systems development</li>
                <li>• SolidWorks modeling and iterative prototyping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Interested in Collaborating?</h2>
          <p className="text-lg mb-8">
            I'm always looking for new opportunities to learn, build, and create innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:cimfam1222@gmail.com" 
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}