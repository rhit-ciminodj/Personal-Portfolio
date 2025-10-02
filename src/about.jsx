import './index.css';

export default function About() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-black to-blue-900 text-white py-16 px-4 rounded-b-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
            About Me
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Enthusiastic Software Engineering student with hands-on experience in web development, 
            algorithm design, and hardware projects.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm currently pursuing a B.S. in Software Engineering at Rose-Hulman Institute of Technology, 
              where I've maintained a 3.87 GPA and earned a spot on the Dean's List every quarter.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              My passion for problem-solving extends beyond the classroom. I thrive in collaborative 
              team environments where learning and innovation are encouraged, and I'm always eager 
              to tackle new challenges with modern frameworks and tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From Coal City, Illinois, I bring a strong work ethic and dedication to everything I do, 
              whether it's competitive programming, building robots, or developing web applications.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📍</span>
                <span className="text-gray-600">Coal City, Illinois</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🎓</span>
                <span className="text-gray-600">Rose-Hulman Institute of Technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📊</span>
                <span className="text-gray-600">GPA: 3.87/4.00</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🏆</span>
                <span className="text-gray-600">Valedictorian - Coal City High School</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span className="text-gray-600">cimfam1222@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Interests</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'C', 'C#'].map((lang) => (
                  <span key={lang} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition duration-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Angular', 'Tailwind', 'MongoDB', 'Git', 'VS Code'].map((tool) => (
                  <span key={tool} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition duration-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Algorithms', 'Robotics', 'Architecture'].map((interest) => (
                  <span key={interest} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition duration-300">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-lg mb-8">
            I'm always interested in discussing new opportunities and projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/rhit-ciminodj" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
            >
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}