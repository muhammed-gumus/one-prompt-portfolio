import React from 'react';

export default function Gemini3FlashPortfolio() {
  const currentYear = new Date().getFullYear();

  const projects = [
    {
      name: "Nexus AI Dashboard",
      description: "A comprehensive AI-driven analytics dashboard that provides real-time insights into user behavior and system performance. Features include predictive modeling visualizations and automated reporting.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "https://github.com/muhammedgumus/nexus-ai-dashboard"
    },
    {
      name: "Stellar E-commerce Platform",
      description: "A high-performance e-commerce solution focused on speed and user experience. Implemented a custom headless CMS integration and a seamless multi-step checkout process.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "https://github.com/muhammedgumus/stellar-ecommerce"
    },
    {
      name: "Pulse Task Manager",
      description: "A collaborative project management tool with real-time updates. Designed with a focus on accessibility and intuitive drag-and-drop interfaces for task organization.",
      tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/muhammedgumus/pulse-task-manager"
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    backend: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"],
    tools: ["Git", "Docker", "Figma", "Vercel", "Jest"]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            MG.
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              I&apos;m <span className="text-indigo-600">Muhammed Gümüş</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-slate-600 mb-8 max-w-2xl leading-tight">
              Frontend Developer & Product Developer building premium digital experiences.
            </p>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
              I specialize in bridging the gap between design and engineering, creating high-performance web applications with a focus on user experience and clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-center"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-xl hover:border-slate-300 transition-all text-center"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  As a passionate developer, I thrive on solving complex problems and turning ideas into functional, beautiful products. My journey in tech is driven by a constant curiosity for new technologies and a commitment to excellence.
                </p>
                <p>
                  I focus on creating maintainable, scalable systems while never losing sight of the end-user. Whether it&apos;s crafting pixel-perfect interfaces or architecting robust backend logic, I bring a product-centric mindset to every project.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3 text-sm italic">
                  &lt;/&gt;
                </span>
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                  <span key={tech} className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-500 text-lg">A selection of recent works that showcase my technical expertise.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.name} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{project.name}</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-semibold uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 pb-8">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 font-bold hover:gap-2 transition-all"
                    >
                      View Codebase <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-16 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">Frontend</h3>
                <ul className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-300">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-violet-400 font-bold uppercase tracking-widest text-sm mb-6">Backend</h3>
                <ul className="space-y-4">
                  {skills.backend.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-300">
                      <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-6">Tools & Others</h3>
                <ul className="space-y-4">
                  {skills.tools.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-300">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-slate-500 text-xl mb-12">
              Have a project in mind or just want to say hi? I&apos;m always open to discussing new ideas.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:muhammedgumus@example.com"
                className="w-full md:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                Email Me
              </a>
              <div className="flex gap-6">
                <a 
                  href="https://linkedin.com/in/muhammedgumus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 flex items-center justify-center border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors text-slate-600 hover:text-indigo-600"
                >
                  <span className="font-bold">LI</span>
                </a>
                <a 
                  href="https://github.com/muhammedgumus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 flex items-center justify-center border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors text-slate-600 hover:text-indigo-600"
                >
                  <span className="font-bold">GH</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">
            © {currentYear} Muhammed Gümüş. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <span>Istanbul, TR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
