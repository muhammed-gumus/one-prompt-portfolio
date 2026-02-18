import Link from 'next/link';


// Icons as components
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 4-2.64-3.5-5.36-4.5-8-4 0 0-1.72 2 1.5 3.5-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

// Data
const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase'],
    githubUrl: 'https://github.com/muhammedgumus/ecommerce-platform',
  },
  {
    name: 'Task Management App',
    description: 'Collaborative task management tool featuring drag-and-drop boards, team workspaces, and real-time updates.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/muhammedgumus/task-manager',
  },
  {
    name: 'AI Content Generator',
    description: 'SaaS application leveraging AI to generate blog posts, social media captions, and marketing copy in seconds.',
    techStack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/muhammedgumus/ai-content-generator',
  },
];

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase'],
  tools: ['Git', 'Docker', 'Figma', 'VS Code', 'Vercel'],
};

export default function GeminiProPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-purple-500/30 selection:text-white font-sans antialiased">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/gemini-3-pro" className="text-xl font-bold tracking-tighter hover:text-white transition-colors">
            MG.
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 border-b border-neutral-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950 to-neutral-950 -z-10" />
          
          <div className="max-w-6xl mx-auto w-full">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-purple-400 border border-purple-500/20 rounded-full bg-purple-500/10 uppercase">
                Available for hire
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Muhammed <span className="text-neutral-500">Gümüş</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
                Frontend Developer & Product Developer crafting pixel-perfect, accessible, and performant web experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#projects"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors duration-200"
                >
                  View Work
                  <ChevronRightIcon className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-transparent border border-neutral-700 rounded-full hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-200"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 border-b border-neutral-800/50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">About Me</h2>
              <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                <p>
                  I'm a passionate developer with a keen eye for design and a strong focus on user experience. 
                  My journey began with a curiosity for how things work on the web, which evolved into a career building 
                  sophisticated applications.
                </p>
                <p>
                  I specialize in the modern JavaScript ecosystem, particularly React and Next.js. I believe in writing 
                  clean, maintainable code and solving complex problems with simple, elegant solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-6">Current Tech Stack</h3>
              <ul className="space-y-4">
                {['Next.js 13+ (App Router)', 'React & React Server Components', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <li key={tech} className="flex items-center text-neutral-300">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-4" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-neutral-950/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Featured Projects</h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                A selection of full-stack applications and tools I've built recently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.name} 
                  className="group relative flex flex-col bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-md border border-neutral-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-neutral-800/50 flex items-center justify-between">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-white hover:text-purple-400 transition-colors gap-2"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      View Source
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 border-t border-neutral-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center">Technical Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-xl font-semibold text-white capitalize border-b border-neutral-800 pb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Let's work together</h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contact@muhammedgumus.dev"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-base font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors gap-3"
              >
                <MailIcon className="w-5 h-5" />
                Email Me
              </a>
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a 
                  href="https://github.com/muhammedgumus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 text-white bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/muhammedgumus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 text-white bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Muhammed Gümüş. All rights reserved.</p>
          <p>Designed & Built with Next.js, Tailwind CSS & TypeScript</p>
        </div>
      </footer>
    </div>
  );
}
