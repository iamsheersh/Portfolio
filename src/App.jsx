import React, { useState, useEffect } from 'react';
import { Mail, Briefcase, Code, User, Send, Linkedin, Github, Layout, MessageCircle, GitFork, Award, FileText } from 'lucide-react';
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

  // Function to determine the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      let currentSection = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
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
    { 
      name: 'n8n', 
      icon: 'https://placehold.co/48x48/ffffff/e75480?text=n8n' 
    },
    { name: 'Agentic AI', icon: 'https://placehold.co/48x48/4b5563/fff?text=AI' },
    { name: 'Networking', icon: 'https://img.icons8.com/fluency/48/network.png' },
    { name: 'MS Word', icon: 'https://img.icons8.com/color/48/microsoft-word-2019--v1.png' },
    { name: 'MS Excel', icon: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png' },
    { name: 'MS PPT', icon: 'https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png' },
  ];

  const projectsData = [
    {
      title: 'NLP-based Inventory System',
      duration: 'May 2025 - June 2025',
      description: '• Designed an NLP-based inventory system to process natural language queries with over 90% accuracy.\n• Enabled real-time database interaction for instant stock insights, improving user efficiency.',
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

  const experienceData = [
    {
      role: 'Python Programming Intern',
      company: 'CodSoft',
      duration: 'One month',
      description: 'Worked on various Python projects, gaining practical experience in software development and problem-solving. Developed and debugged scripts, contributing to real-world applications.',
    },
  ];

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
        <ul className="hidden md:flex space-x-6">
          {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((id) => (
            <motion.li key={id} className="relative">
              <a
                onClick={() => scrollToSection(id)}
                className={`text-lg font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${activeSection === id ? 'text-sky-400' : 'text-gray-300 hover:text-sky-200'}`}
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
        <p className="text-xl md:text-3xl font-light text-sky-200">BSc IT Student | Tech Enthusiast</p>
        <motion.a
          onClick={() => scrollToSection('contact')}
          className="mt-8 inline-block px-8 py-3 bg-sky-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Send size={20} />
          <span>Hire Me</span>
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
      <motion.a
        href="/path/to/your-resume.pdf"
        download="Sheersh_Resume.pdf"
        className="absolute top-4 right-4 inline-block px-4 py-2 text-lg font-semibold rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center space-x-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.8 }}
      >
        <FileText size={20} />
        <span>Resume</span>
      </motion.a>
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

  const Achievements = () => (
    <motion.section
      id="achievements"
      className="my-16 bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#3e4a5d', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="flex items-start space-x-4">
              <Award className="text-sky-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-sky-400">{achievement.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{achievement.date}</p>
                <p className="text-gray-300 text-base">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
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
          <Send size={20} />
          <span>Submit</span>
        </button>
        {formStatus && <p className="mt-4 text-center text-sm font-medium">{formStatus}</p>}
      </form>
      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-4">Or connect with me here:</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
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
