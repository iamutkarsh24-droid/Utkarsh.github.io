function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  const contactInfo = {
    name: "Utkarsh Mishra",
    phones: ["+91 6392359381", "+1 240-724-6225"],
    emails: {
      personal: "iamutkarsh24@gmail.com",
      work: "Utkarsh@tekaccel.com"
    },
    social: {
      linkedin: "https://www.linkedin.com/in/utkarshmishra007/",
      instagram: "imcarsh"
    }
  };

  const sections = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-indigo-600">
              {contactInfo.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === section.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-600 hover:bg-indigo-50'
                  }`}
                >
                  <i className={section.icon}></i>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <i className="fas fa-user text-6xl text-white"></i>
              </div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                {contactInfo.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional | Innovator | Problem Solver
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => setActiveSection('about')}
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                  <i className="fas fa-user text-8xl text-white"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Hello, I'm {contactInfo.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm a dedicated professional with a passion for innovation and excellence. 
                  With experience across multiple domains, I bring a unique perspective to every project I work on.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-briefcase text-indigo-600"></i>
                    <span className="text-gray-700">Professional Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-graduation-cap text-indigo-600"></i>
                    <span className="text-gray-700">Continuous Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-lightbulb text-indigo-600"></i>
                    <span className="text-gray-700">Innovation Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i className="fas fa-phone text-indigo-600 mr-3"></i>
                    Phone Numbers
                  </h3>
                  {contactInfo.phones.map((phone, index) => (
                    <div key={index} className="mb-2">
                      <a 
                        href={`tel:${phone}`}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Email Addresses */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i className="fas fa-envelope text-indigo-600 mr-3"></i>
                    Email Addresses
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500">Personal:</span>
                      <br />
                      <a 
                        href={`mailto:${contactInfo.emails.personal}`}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {contactInfo.emails.personal}
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Work:</span>
                      <br />
                      <a 
                        href={`mailto:${contactInfo.emails.work}`}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {contactInfo.emails.work}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i className="fas fa-share-alt text-indigo-600 mr-3"></i>
                    Social Media
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href={contactInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <i className="fab fa-linkedin text-2xl text-blue-600"></i>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-blue-600">LinkedIn</div>
                        <div className="text-sm text-gray-500">Professional Network</div>
                      </div>
                    </a>
                    <a 
                      href={`https://instagram.com/${contactInfo.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50 transition-colors group"
                    >
                      <i className="fab fa-instagram text-2xl text-pink-600"></i>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-pink-600">Instagram</div>
                        <div className="text-sm text-gray-500">@{contactInfo.social.instagram}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Message</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <textarea 
                      placeholder="Your Message"
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    ></textarea>
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center py-2 px-4 ${
                activeSection === section.id ? 'text-indigo-600' : 'text-gray-600'
              }`}
            >
              <i className={section.icon}></i>
              <span className="text-xs mt-1">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}