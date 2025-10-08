import { useState } from 'react';
import './index.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Always use relative URL for API calls on Vercel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-black to-blue-900 text-white py-16 px-4 rounded-b-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            I'd love to hear about opportunities, projects, or just chat about technology.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information & What I'm Looking For */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              I'm currently pursuing my Software Engineering degree at Rose-Hulman and actively 
              seeking internship opportunities, collaborative projects, and networking connections 
              in the tech industry.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a 
                    href="mailto:cimfam1222@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    cimfam1222@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-blue-600 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a 
                    href="tel:+18159043016" 
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    (815) 904-3016
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-blue-600 text-xl">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">GitHub</h3>
                  <a 
                    href="https://github.com/rhit-ciminodj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    github.com/rhit-ciminodj
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Coal City, IL</p>
                  <p className="text-gray-600 text-sm">Available for remote work & relocation</p>
                </div>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What I'm Looking For</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Internship Opportunities</h4>
                  <p className="text-gray-600 text-sm">
                    Summer 2026 software engineering internships in web development, 
                    full-stack development, or systems programming.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Collaborative Projects</h4>
                  <p className="text-gray-600 text-sm">
                    Open source contributions, hackathons, or team projects involving 
                    modern web technologies or algorithmic challenges.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Networking</h4>
                  <p className="text-gray-600 text-sm">
                    Connecting with professionals in the tech industry, mentorship 
                    opportunities, and industry insights.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Learning Opportunities</h4>
                  <p className="text-gray-600 text-sm">
                    Workshops, tech talks, coding challenges, or any chance to expand 
                    my technical knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="w-full bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Response Guarantee</h3>
          <p className="text-gray-600 leading-relaxed">
            I typically respond to emails within 24 hours. Whether you're reaching out about 
            opportunities, have questions about my projects, or just want to connect, I'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Message Sent Successfully?</h2>
          <p className="text-lg mb-8">
            Great! I'll review your message and get back to you within 24 hours. In the meantime, 
            feel free to check out my projects or connect with me on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/projects"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View My Projects
            </a>
            <a 
              href="https://github.com/rhit-ciminodj" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}