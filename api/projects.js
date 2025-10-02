// Sample projects data
const projects = [
  {
    id: 1,
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
    status: "In Progress",
    featured: true
  },
  {
    id: 2,
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
    github: null,
    live: null,
    status: "Completed"
  },
  {
    id: 3,
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
    github: null,
    live: null,
    status: "Completed"
  },
  {
    id: 4,
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
    github: null,
    live: null,
    status: "Completed"
  }
];

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    // Check if requesting specific project by ID
    const { id } = req.query;
    
    if (id) {
      const project = projects.find(p => p.id === parseInt(id));
      
      if (!project) {
        return res.status(404).json({
          success: false,
          error: 'Project not found'
        });
      }

      return res.json({
        success: true,
        data: project
      });
    }

    // Return all projects
    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects'
    });
  }
}