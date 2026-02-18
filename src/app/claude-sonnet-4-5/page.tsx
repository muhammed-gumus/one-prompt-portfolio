'use client';

export default function ClaudeSonnet45Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Muhammed Gümüş
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-8">
              Frontend Developer & Product Developer
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            I craft exceptional digital experiences by combining modern frontend technologies 
            with product thinking. Specialized in building scalable, user-centric applications 
            that solve real-world problems with clean code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border border-slate-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              As a Frontend Developer and Product Developer, I bridge the gap between design and 
              functionality. My approach combines technical excellence with user-centered thinking 
              to create applications that are not only powerful but also intuitive and delightful to use.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              I specialize in modern web technologies and have a proven track record of delivering 
              high-quality solutions that scale. From concept to deployment, I focus on writing 
              maintainable code and building products that users love.
            </p>
            
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-slate-700/50 text-slate-200 rounded-lg font-medium border border-slate-600/50 hover:border-cyan-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                TaskFlow Pro
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                A comprehensive task management application with real-time collaboration, 
                drag-and-drop interfaces, and advanced filtering capabilities.
              </p>
              <div className="mb-6">
                <p className="text-sm text-cyan-400 font-semibold mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/muhammedgumus/taskflow-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Interactive data visualization platform with customizable widgets, 
                real-time updates, and comprehensive reporting features.
              </p>
              <div className="mb-6">
                <p className="text-sm text-cyan-400 font-semibold mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js'].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/muhammedgumus/analytics-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                E-Commerce Platform
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Full-featured online shopping platform with payment integration, 
                inventory management, and responsive design for all devices.
              </p>
              <div className="mb-6">
                <p className="text-sm text-cyan-400 font-semibold mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Tailwind', 'Node.js'].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/muhammedgumus/ecommerce-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Frontend</h3>
              <ul className="space-y-3">
                {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'State Management', 'Performance Optimization'].map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Backend</h3>
              <ul className="space-y-3">
                {['Node.js', 'RESTful APIs', 'Database Design', 'Authentication', 'Server-Side Rendering', 'API Integration'].map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Tools</h3>
              <ul className="space-y-3">
                {['Git & GitHub', 'VS Code', 'Figma', 'Chrome DevTools', 'npm/yarn', 'Vercel/Netlify'].map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:muhammed.gumus@example.com" className="text-lg font-medium">
                  muhammed.gumus@example.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a 
                  href="https://www.linkedin.com/in/muhammedgumus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium"
                >
                  linkedin.com/in/muhammedgumus
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a 
                  href="https://github.com/muhammedgumus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium"
                >
                  github.com/muhammedgumus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900/80 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Muhammed Gümüş. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
