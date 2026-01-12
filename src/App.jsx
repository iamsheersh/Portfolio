import React, { useState, useEffect } from 'react';
import { Mail, Briefcase, Code, User, Send, Linkedin, Github, Layout, MessageCircle, GitFork, Award, FileText, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      let currentSection = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in the middle of the viewport
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsData = [
    { name: 'C', icon: 'https://img.icons8.com/color/48/000000/c-programming.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png' },
   // { name: 'MySQL', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1WKozLHHneWpGnRafbRutsrBGK74JwQO1w&s' },
    { name: 'Vibe Coding', icon: 'data:image/jpeg;base64,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'},
    {  
      name: 'n8n', 
      icon: 'https://placehold.co/48x48/ffffff/e75480?text=n8n' 
    },
    { name: 'Agentic AI', icon: 'https://placehold.co/48x48/4b5563/fff?text=AI' },
    { name: 'Networking', icon: 'https://img.icons8.com/fluency/48/network.png' },
    { name: 'MS Word', icon: 'https://img.icons8.com/color/48/microsoft-word-2019--v1.png' },
    { name: 'MS Excel', icon: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png' },
    { name: 'MS PPT', icon: 'https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png' },
    { name: 'Figma', icon: 'data:image/jpeg;base64,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' }
  ];

  const projectsData = [
    {
      title: 'Agentic AI-based Inventory Management System',
      duration: 'May 2025 - June 2025',
      description: '• Designed an Agentic AI-based inventory management system to process natural language queries with over 90% accuracy.\n• Enabled real-time database interaction for instant stock insights, improving user efficiency.',
      tech: ['n8n', 'Agentic AI', 'APIs'],
      icon: <Layout className="text-sky-400" size={32} />,
    },
    {
      title: 'AI ChatBot',
      duration: 'June 2025 - June 2025',
      description: '• Developed a responsive chatbot UI in n8n, enabling real-time conversations with a user-friendly interface that improved user engagement by 30%.\n• Integrated OpenAI API, enhancing response accuracy and context-awareness, resulting in a 50% decrease in user query resolution time.',
      tech: ['Agentic AI', 'n8n', 'OpenAI API'],
      icon: <MessageCircle className="text-sky-400" size={32} />,
    },
    {
      title: 'AI Caller Agent',
      duration: 'June 2025 - July 2025',
      description: '• Developed an AI caller agent capable of handling advertisement calls and resolving customer queries effectively.\n• Implemented a recording feature to capture inputs from calls for record-keeping and analysis.\n• Enhanced customer interaction efficiency by automating responses and reducing human intervention by 40%',
      tech: ['Agentic AI', 'n8n', 'Vapi', 'Voice AI', 'Twilio'],
      icon: <GitFork className="text-sky-400" size={32} />,
    },
  ];
  
  const certificationsByIssuer = {
    'IIT Bombay': ['Python', 'C', 'C++', 'JS', 'PHP', 'Java', 'HTML', 'CSS', 'SQL'],
    'CIMAGE Group of Institutions': ['Agentic AI', 'Comptia A+ and N+'],
    'Infosys Springboard': ['Introduction To Data Science', 'Introduction To NLP'],
    'Great Learning': ['Front End Development : HTML', 'Front End Development : CSS'],
    'TCS iON': ['Communication Skills'],
    'HackerRank': ['SQL (Basic)'],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.description) {
        setFormStatus('Please fill in all required fields.');
        return;
      }
      setTimeout(() => {
        setFormStatus('Message sent successfully! (Note: This is a simulation. You need to set up a backend to make this work)');
        setFormData({ name: '', email: '', phone: '', description: '' });
      }, 1500);
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-sky-400">Sheersh</div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3">
          {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((id) => (
            <motion.li key={id} className="relative">
              <a
                onClick={() => scrollToSection(id)}
                className={`text-lg font-medium px-2 py-2 rounded-full cursor-pointer transition-colors duration-300 ${activeSection === id ? 'text-sky-400' : 'text-gray-300 hover:text-sky-200'}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
              {activeSection === id && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-sky-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-gray-950/90 backdrop-blur-md shadow-lg md:hidden"
            >
              <ul className="flex flex-col items-center py-4 space-y-4">
                {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((id) => (
                  <motion.li key={id} className="w-full text-center">
                    <a
                      onClick={() => scrollToSection(id)}
                      className={`block text-lg font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${activeSection === id ? 'text-sky-400' : 'text-gray-300 hover:text-sky-200'}`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </motion.li>
                ))}
                  <motion.li key="resume" className="w-full text-center">
                    <a
                      href="/path/to/your-resume.pdf"
                      download="Sheersh_Resume.pdf"
                      className="block px-4 py-2 text-lg font-semibold rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-all duration-300"
                    >
                     Resume
                    </a>
                  </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );

  const Hero = () => (
    <motion.header
      id="home"
      className="flex items-center justify-center h-screen bg-gray-800 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-sky-900 opacity-90"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-sky-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 glow-animate"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 glow-animate" style={{ animationDelay: '2s' }}></div>
      <motion.div
        className="z-10 text-white p-6 rounded-xl shadow-2xl backdrop-filter backdrop-blur-md bg-gray-900/60 transition-transform duration-500 hover:scale-105"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hey, I'm Sheersh</h1>
        <p className="text-xl md:text-3xl font-light text-sky-200">BSc IT Student | AI And Cloud Enthusiast</p>
        <motion.a
          href="/path/to/your-resume.pdf"
          download="Sheersh_Resume.pdf"
          className="mt-8 inline-block px-8 py-3 bg-sky-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span>Download Resume</span>
        </motion.a>
      </motion.div>
    </motion.header>
  );

  const About = () => (
    <motion.section
      id="about"
      className="my-16 flex flex-col md:flex-row items-center gap-8 bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am Sheersh, a passionate 3rd-year BSc IT student. I am driven by a deep curiosity for technology and a commitment to solving problems with code. My journey in the world of IT has equipped me with a solid foundation in programming and an eagerness to learn new technologies. I enjoy building things and am always looking for new challenges to grow my skills.
        </p>
      </div>
    </motion.section>
  );

  const Skills = () => (
    <section id="skills" className="my-16 bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#3e4a5d', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12 mb-2" onError={(e) => e.target.src='https://placehold.co/48x48/000/fff?text=?'}/>
            <span className="text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );

  const Projects = () => (
    <motion.section
      id="projects"
      className="my-16 bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#3e4a5d', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              {project.icon}
              <h3 className="text-xl font-bold text-sky-400">{project.title}</h3>
            </div>
            <p className="text-gray-300 mb-4 whitespace-pre-wrap">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-sky-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );

  const Certifications = () => (
    <motion.section
      id="certifications"
      className="my-16 bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="space-y-8">
        {Object.entries(certificationsByIssuer).map(([issuer, certs], index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-sky-300 mb-4">{issuer}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((cert, certIndex) => (
                <motion.div
                  key={certIndex}
                  className="bg-gray-600 p-4 rounded-lg flex items-center space-x-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Award className="text-sky-400 flex-shrink-0" size={24} />
                  <span className="text-lg font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );

  const Contact = () => (
    <motion.section
      id="contact"
      className="my-16 bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Want to Hire Me?</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name <span className="text-red-400">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-sky-500 transition-colors duration-300 hover:border-sky-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-400">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-sky-500 transition-colors duration-300 hover:border-sky-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number <span className="text-red-400">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-sky-500 transition-colors duration-300 hover:border-sky-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description <span className="text-red-400">*</span></label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-sky-500 transition-colors duration-300 hover:border-sky-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <span>Submit</span>
        </button>
        {formStatus && <p className="mt-4 text-center text-sm font-medium">{formStatus}</p>}
      </form>
      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-4">Or connect with me here:</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/sheersh-984437267/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/iamsheersh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="mailto:official.sheersh@gmail.com" className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </motion.section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
      <p className="text-sm text-gray-500">&copy; 2025 Sheersh. All rights reserved.</p>
    </footer>
  );

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <style>
        {`
          @keyframes glow {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
          }
          .glow-animate {
            animation: glow 4s ease-in-out infinite;
          }
        `}
      </style>

      <Nav />
      <Hero />

      <main className="container mx-auto px-4 py-16">
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
