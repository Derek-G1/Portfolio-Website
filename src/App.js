import emailjs from '@emailjs/browser';
import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Terminal, Server, FileCode2, Brain, BarChart, Laptop, Music, Utensils, PartyPopper, Globe, Github } from 'lucide-react'; // Added Github icon

// Block Guard Project Data
const blockGuardProject = {
  id: 'block-guard', // Unique identifier for the project
  title: 'Block Guard',
  subtitle: 'Smart Call & Message Management Solution',
  description: 'Block Guard is a powerful call and message management application designed to give users complete control over their incoming communications. With intelligent filtering capabilities, customizable settings, and a user-friendly interface, Block Guard helps eliminate unwanted calls and messages while ensuring important connections are never missed.',
  features: [
    'Precise Call Blocking: Block specific phone numbers with automatic rejection.',
    'Call Whitelisting: Create exceptions for important callers.',
    'Area Code Filtering: Block or allow calls based on area codes.',
    'Text Message Blocking: Filter unwanted SMS messages based on senders or keywords.',
    'Do Not Disturb Mode: Configure comprehensive quiet periods with customizable exceptions.',
    'Contact Management: Intelligently manage contacts with easy configuration.',
    'Detailed Call Log: View a complete history of blocked calls with timestamps.',
    'Blocked Message Log: Review messages that have been blocked by the app.',
    'Status Notifications: Optional status bar indicators when DND mode is active.',
    'Dialer Functionality: Make and receive calls directly within the app.',
    'SMS Messaging: Send and receive text messages.',
    'Backup & Restore: Securely backup and restore your settings and message history.',
  ],
  technicalDetails: {
    overview: 'Block Guard is built using modern Android development practices:',
    technologies: [
      'Kotlin programming language',
      'Jetpack Compose UI framework for a modern, reactive UI',
      'Material Design 3 components for a consistent and visually appealing experience',
      'MVVM architecture pattern',
      'Room Database for local data storage',
      'kotlinx.serialization for JSON processing',
      'Accompanist Permissions for simplified permission handling',
      'DataStore for preferences',
    ],
    developmentEnvironment: {
      requirements: [
        'Android Studio Giraffe (2023.1.1) or higher',
        'JDK 17+',
        'Gradle 8.11.1+ (as per gradle-wrapper.properties)',
        'Android SDK: Compile SDK: 35, Min SDK: 28, Target SDK: 35',
      ],
      gettingStarted: [
        'Clone the repository',
        'Open the project in Android Studio',
        'Sync Gradle files',
        'Build and run the application',
      ],
    },
    projectStructure: [
      '`MainActivity.kt`: Main entry point and UI controller for various screens.',
      '`CallBlocker.kt`: Core call blocking functionality and logic.',
      '`TextBlockerService.kt`: Core text message blocking functionality.',
      '`ContactHelper.kt`: Contact management utilities.',
      '`DndNotificationManager.kt`: Notification management for DND mode.',
      '`PhoneCallReceiver.kt`: BroadcastReceiver for incoming call states.',
      '`SmsReceiver.kt`: BroadcastReceiver for incoming SMS messages.',
      '`CallService.kt` & `CallActivity.kt`: Manage active calls and the in-call UI.',
      '`MyCallScreeningService.kt`: Implements Android\'s CallScreeningService for advanced call control.',
      'UI components organized by feature in the `screens` package.',
    ],
  },
};


const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const form = useRef(); // Initialize the ref for the form

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Google Data Analytics', icon: BarChart, category: 'Certification', color: 'from-green-500 to-lime-500' },
    { name: 'Google IT Automation', icon: Server, category: 'Certification', color: 'from-lime-500 to-yellow-500' },
    { name: 'Google IT Support', icon: Laptop, category: 'Certification', color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS (MTA 98-383)', icon: FileCode2, category: 'Frontend', color: 'from-cyan-500 to-teal-500' },
    { name: 'JavaScript (MTA 98-382)', icon: Code2, category: 'Development', color: 'from-teal-500 to-green-500' },
    { name: 'Software Devloper Fundamentals (MTA 98-361)', icon: Brain, category: 'Development', color: 'from-emerald-500 to-cyan-500' },
    { name: 'Database (MTA 98-364)', icon: Database, category: 'Data', color: 'from-green-500 to-emerald-500' },
    { name: 'Python (MTA 98-381)', icon: Terminal, category: 'Development', color: 'from-cyan-500 to-blue-500' },
    { name: 'Object Oriented Programming', icon: Code2, category: 'Development', color: 'from-purple-500 to-blue-500' },
    { name: 'Full-Stack Development', icon: Terminal, category: 'Development', color: 'from-blue-500 to-cyan-500' },
    { name: 'Perl', icon: Code2, category: 'Development', color: 'from-pink-500 to-rose-500' },
    { name: 'SQL', icon: Database, category: 'Data', color: 'from-rose-500 to-red-500' }
  ];

  const projects = [
    {
      title: "Sweet Chin Music Ohio",
      description: "Website for a popular cover band performing pop and rock music at various venues across Northeast Ohio. Features event calendar, music samples, and booking information.",
      url: "www.SweetChinMusicOhio.com",
      tags: ["Web Development", "Entertainment", "Events"],
      icon: "Music"
    },
    {
      title: "Au Jus Cleveland",
      description: "Restaurant website showcasing their signature Chicago-style Italian beef sandwiches and menu. Includes online ordering and location information.",
      url: "www.Aujus-Cle.com",
      tags: ["Web Development", "Restaurant", "E-commerce"],
      icon: "Utensils"
    },
    {
      title: "Danimal Clown Entertainment",
      description: "Personal website for a professional clown entertainer specializing in children's parties and charity events. Features booking system and event galleries.",
      url: "www.DanimalClown.com",
      tags: ["Web Development", "Entertainment", "Events"],
      icon: "Party"
    },
    {
      title: blockGuardProject.title,
      description: blockGuardProject.description,
      url: "Blockguard.app", // Updated to Blockguard.app
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.radstormtech.blockguard", // Google Play Store link
      tags: ["Android Development", "Mobile App", "Kotlin", "Jetpack Compose"], // Example tags for Block Guard
      icon: "Globe" // Using Globe for a general app icon
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // It's highly recommended to use environment variables for these
    // These values will be pulled from your .env file (e.g., REACT_APP_EMAILJS_SERVICE_ID)
    // The || 'fallback_value' is only for local development if .env is not set up,
    // but for production, ensure your CI/CD pipeline sets these environment variables.
    const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are loaded
    if (!YOUR_SERVICE_ID || !YOUR_TEMPLATE_ID || !YOUR_PUBLIC_KEY) {
      alert('Email service is not configured. Please check your environment variables.');
      console.error('EmailJS environment variables are missing!');
      return;
    }

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset form fields after successful submission
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Derek Gembus
            </h1>
            <div className="space-x-6">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.3),rgba(0,0,0,0))]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Derek Gembus
              </span>
              <span className="block text-3xl mt-4 text-gray-300">
                Software Developer & Data Engineer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transforming complex challenges into elegant solutions
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#contact" 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" 
                className="px-8 py-4 rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all transform hover:scale-105">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/30 shadow-xl">
              <p className="text-gray-300 text-lg leading-relaxed">
              As a multifaceted Software Developer and Data Engineer, I bring a robust skill set spanning multiple technical domains. 
              With Google specializations in Data Analytics, IT Automation, and IT Support, 
              alongside Microsoft Technology Associate certifications in programming, software development, database management, and web technologies, 
              I combine deep technical knowledge with practical problem-solving skills. Proficient in languages like Python, JavaScript, Perl, and SQL, 
              I excel at transforming complex challenges into elegant solutions. I provide comprehensive web solutions, 
              from responsive website design to robust backend systems, leveraging expertise in HTML, CSS, JavaScript, 
              and modern frameworks to create efficient, user-friendly web experiences that help businesses establish a strong online presence.  
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} 
                  className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative bg-gray-900 p-6 border border-purple-500/30">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-purple-500/20">
                        <skill.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      {project.icon === "Music" && <Music className="w-8 h-8 text-purple-400" />}
                      {project.icon === "Utensils" && <Utensils className="w-8 h-8 text-purple-400" />}
                      {project.icon === "Party" && <PartyPopper className="w-8 h-8 text-purple-400" />}
                      {project.icon === "Globe" && <Globe className="w-8 h-8 text-purple-400" />} {/* Render Globe icon */}
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>{project.url}</span>
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mt-2"
                      >
                        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-24 h-auto" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/30 shadow-xl">
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="mb-8">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Programmer/Data Engineer</h3>
                  <p className="text-purple-400 text-lg mb-2">Marketing Communication Resource, LLC</p>
                  <p className="text-gray-400 mb-4">2022-2024</p>
                  <ul className="space-y-4">
                    <li className="flex items-start group">
                      <Terminal className="w-5 h-5 text-purple-400 mt-1 mr-3 group-hover:text-purple-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        Developed and executed data import processes using Perl scripts and SQL queries
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <Database className="w-5 h-5 text-purple-400 mt-1 mr-3 group-hover:text-purple-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        Conducted data cleaning and transformation tasks
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <BarChart className="w-5 h-5 text-purple-400 mt-1 mr-3 group-hover:text-purple-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        Modified ask matrices to optimize donation solicitation strategies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/30 shadow-xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 mb-4">You can also connect with me on:</p>
              <ul className="flex justify-center space-x-6">
                <li>
                  <a
                    href="https://www.linkedin.com/in/derek-gembus-976b25167/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
                  >
                    <Globe className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Derek-G1" // Your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Derek Gembus
            </h2>
            <p className="text-gray-400 mb-6">Software Developer & Data Engineer</p>
            <p className="text-purple-400">www.DerekGembus.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
