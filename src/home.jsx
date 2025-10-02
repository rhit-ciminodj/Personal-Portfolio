import './index.css';

let skills = {
  'Frontend': { 
    technologies: ['React', 'Angular', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'], 
    description: 'Building responsive, modern web applications with clean UI/UX' 
  }, 
  'Backend': { 
    technologies: ['Node.js', 'MongoDB', 'Express', 'Python', 'Java'], 
    description: 'Developing robust server-side applications and APIs' 
  }, 
  'Systems': { 
    technologies: ['C', 'C#', 'Assembly', 'Verilog', 'RiSC-V'], 
    description: 'Low-level programming and computer architecture understanding' 
  }
};

function SkillCard({title, technologies, description}) {
  return (
    <div className='group p-4 md:p-6 bg-white rounded-lg shadow-md transition-all duration-700 ease-in-out min-h-[200px] w-full max-w-80 mx-auto'>
      <div className='flex flex-col items-center text-center transition-all duration-700 ease-in-out'>
        <div className='w-16 h-16 flex justify-center items-center mx-auto mb-4 bg-gradient-to-r from-blue-900 to-black rounded-full'>
          <span className='text-white font-bold text-xl'>{title[0]}</span>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-base md:text-lg font-semibold mb-2 transition-all duration-300'>{title}</h3>
          <p className='text-xs md:text-sm text-gray-600 mb-3 transition-all duration-300'>{description}</p>
          <div className='flex flex-wrap gap-1 justify-center'>
            {technologies.map((tech, index) => (
              <span key={index} className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className='flex xl:flex-row flex-col items-center justify-center gap-0 h-auto w-full p-4 xl:p-8 xl:items-stretch'>
      <div className='flex flex-col text-center xl:text-start items-center xl:items-start justify-center bg-gradient-to-b xl:bg-gradient-to-r from-blue-900 to-black text-white w-full xl:w-1/3 p-6 rounded-t-lg xl:rounded-l-lg xl:rounded-t-none'>
        <h2 className='text-2xl font-bold mb-2 py-4'>Education & Honors</h2>
        <div className='mb-4'>
          <h3 className='text-lg font-semibold'>Rose-Hulman Institute of Technology</h3>
          <p className='text-sm'>B.S. Software Engineering</p>
          <p className='text-sm'>Expected Graduation: May 2028</p>
          <p className='text-sm font-semibold'>GPA: 3.87/4.00</p>
        </div>
        <div className='mb-4'>
          <h4 className='font-semibold mb-2'>Achievements:</h4>
          <ul className='list-none pl-0 text-start text-sm'>
            <li className='before:content-["•"] before:mr-2 pl-4 before:-ml-4'>Dean's List - All Quarters (2024-2025)</li>
            <li className='before:content-["•"] before:mr-2 pl-4 before:-ml-4'>Valedictorian - Coal City High School</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center bg-black text-white p-6 w-full xl:w-2/3 rounded-b-lg xl:rounded-r-lg xl:rounded-b-none'>
        <h2 className='text-2xl mb-6'>Experience & Activities</h2>
        <div className='flex flex-col lg:flex-row items-stretch justify-center gap-6 text-center mb-8'>
          <div className='flex flex-col border border-white p-4 rounded-lg shadow-lg flex-1 px-6'>
            <h3 className='text-lg font-semibold pb-2 border-b border-white mb-4'>Competitive Programming</h3>
            <ul className='list-none pl-0 text-start text-sm'>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Weekly practice sessions</li>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Regional competitions</li>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Advanced algorithm problem solving</li>
            </ul>
          </div>
          <div className='flex flex-col border border-white p-4 rounded-lg shadow-lg flex-1 px-6'>
            <h3 className='text-lg font-semibold pb-2 border-b border-white mb-4'>Combat Robotics Club</h3>
            <ul className='list-none pl-0 text-start text-sm'>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Robot design & construction</li>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>SolidWorks modeling</li>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Iterative prototyping</li>
            </ul>
          </div>
          <div className='flex flex-col border border-white p-4 rounded-lg shadow-lg flex-1 px-6'>
            <h3 className='text-lg font-semibold pb-2 border-b border-white mb-4'>Election Judge</h3>
            <ul className='list-none pl-0 text-start text-sm'>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Voter check-in management</li>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Procedure enforcement</li>
              <li className='pl-4 -indent-4 before:content-["•"] before:mr-2'>Fast-paced environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-black to-blue-900 text-white py-16 px-4 rounded-b-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
            Welcome to my portfolio!
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            I'm a passionate Software Engineering student at Rose-Hulman Institute of Technology, focused on building innovative solutions.
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center w-full overflow-x-hidden'>        
        <div className='flex flex-col items-center justify-center gap-4 w-full h-auto mt-8 px-4'>
          <h2 className='text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-900 text-center'>My Expertise</h2>
        </div>
        
        <div className='flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 p-4 md:p-8 w-full text-center mb-8 md:mb-32'>
          <div className='bg-gradient-to-b md:bg-gradient-to-r from-black to-blue-950 text-white p-3 md:p-4 rounded-lg shadow-lg flex-1'>
            <h2 className='text-base md:text-xl font-semibold'>Full-Stack Development</h2>
            <p className='text-xs md:text-sm'>Experienced in building end-to-end web applications using modern frameworks like React, Angular, and Node.js.</p>
          </div>
          <div className='bg-blue-950 text-white p-3 md:p-4 rounded-lg shadow-lg transition duration-1000 flex-1'>
            <h2 className='text-base md:text-xl font-semibold'>Algorithm Design</h2>
            <p className='text-xs md:text-sm'>Strong foundation in data structures, algorithms, and competitive programming with practical implementation experience.</p>
          </div>
          <div className='bg-gradient-to-b md:bg-gradient-to-r from-blue-950 to-blue-900 text-white p-3 md:p-4 rounded-lg shadow-lg flex-1'>
            <h2 className='text-base md:text-xl font-semibold'>Systems Programming</h2>
            <p className='text-xs md:text-sm'>Understanding of low-level programming, computer architecture, and hardware design through hands-on projects.</p>
          </div>
        </div>
        
        <div className='flex flex-col items-center gap-4 w-full py-8 px-4'>
          <h2 className='text-lg md:text-2xl font-bold text-center'>Technical Skills</h2>
          <h3 className='text-sm md:text-lg text-gray-600 text-center'>Here are the technologies I work with</h3>
        </div>
        
        <div className='flex flex-col md:flex-row justify-center gap-4 w-full items-center px-4 md:px-12 mb-8'>
          <SkillCard title={Object.keys(skills)[0]} technologies={skills[Object.keys(skills)[0]].technologies} description={skills[Object.keys(skills)[0]].description} />
          <SkillCard title={Object.keys(skills)[1]} technologies={skills[Object.keys(skills)[1]].technologies} description={skills[Object.keys(skills)[1]].description} />
          <SkillCard title={Object.keys(skills)[2]} technologies={skills[Object.keys(skills)[2]].technologies} description={skills[Object.keys(skills)[2]].description} />
        </div>
        
        <Experience />
        
        <div className='flex flex-col items-center justify-center gap-4 w-full min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-4 md:p-8 rounded-t-full'>
          <h2 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center px-2  text-transparent'><span className='bg-clip-text bg-gradient-to-r from-white to-yellow-300'>Learn</span><span className='text-yellow-300'>.Build</span><span className='bg-clip-text bg-gradient-to-r from-yellow-300 to-white'>.Innovate</span></h2>
          <p className='text-sm md:text-lg mb-8 text-center max-w-xs md:max-w-2xl px-2 bg-clip-text bg-gradient-to-b from-white via-white to-yellow-300 text-transparent'>Let's collaborate and build something amazing together.</p>
        </div>
        
        <footer className='mt-0 flex flex-col items-center justify-center gap-4 w-full bg-black text-white p-4'>
          <p className='text-xs md:text-sm text-center px-2'>Contact me at: <a href='mailto:cimfam1222@gmail.com' className='text-blue-400 hover:underline'>cimfam1222@gmail.com</a></p>
          <p className='text-xs md:text-sm text-center px-2'>Find me on: 
            <a href='https://github.com/rhit-ciminodj' className='text-blue-400 hover:underline'> GitHub</a>,  
          </p>
        </footer>
      </div>
    </div>
  )
}
