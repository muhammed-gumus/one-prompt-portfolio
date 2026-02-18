import React from 'react';

export default function ClaudeOpus4Portfolio() {
  const currentYear = new Date().getFullYear();

  const projects = [
    {
      name: "Vaultline Finance Tracker",
      description:
        "A personal finance management application with intuitive transaction categorization, spending trend visualizations, and budget forecasting powered by historical data analysis.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/muhammedgumus/vaultline-finance-tracker",
    },
    {
      name: "Threadwork Collaboration Hub",
      description:
        "A real-time team collaboration platform featuring threaded discussions, shared document editing, and integrated kanban boards for streamlined project workflows.",
      tech: ["React", "Node.js", "TypeScript", "Socket.IO"],
      github: "https://github.com/muhammedgumus/threadwork-collaboration-hub",
    },
    {
      name: "Pixelmorph Design System",
      description:
        "A comprehensive, token-driven design system and component library built for consistency across large-scale applications, complete with documentation site and visual regression testing.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
      github: "https://github.com/muhammedgumus/pixelmorph-design-system",
    },
  ];

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "GraphQL",
    ],
    tools: ["Git", "Docker", "Figma", "Vercel", "Jest", "GitHub Actions"],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur-xl z-50 border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-amber-400">
            MG
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a
              href="#about"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase text-amber-400 border border-amber-400/20 rounded-full bg-amber-400/5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Open to opportunities
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
                Muhammed
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Gümüş
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-neutral-400 mb-6">
                Frontend Developer &amp; Product Developer
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed mb-10 max-w-2xl">
                I craft performant, accessible, and visually refined web
                experiences. With a deep focus on modern frontend architectures
                and product thinking, I turn complex requirements into polished
                digital products that users genuinely enjoy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-neutral-950 font-bold rounded-xl hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20"
                >
                  View Projects
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-neutral-300 font-semibold rounded-xl hover:border-neutral-500 hover:text-white transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-16 items-start">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-2 tracking-tight">
                  About Me
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mb-8" />
                <div className="space-y-5 text-neutral-400 text-lg leading-relaxed">
                  <p>
                    I am a frontend-focused software developer with a strong
                    product mindset. I believe great software emerges at the
                    intersection of thoughtful engineering and genuine empathy
                    for users. Every interface I build is guided by the
                    principle that clarity and performance are inseparable from
                    good design.
                  </p>
                  <p>
                    My experience spans building scalable single-page
                    applications, architecting reusable component systems, and
                    collaborating closely with designers and product teams to
                    ship features that make a measurable difference. I care
                    deeply about code quality, accessibility, and delivering
                    experiences that feel effortless.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6">
                    Core Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-neutral-800 border border-neutral-700/50 rounded-lg text-sm font-medium text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mb-4" />
            <p className="text-neutral-500 text-lg mb-16 max-w-xl">
              Selected work demonstrating my approach to building robust,
              user-centered applications.
            </p>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 hover:border-neutral-700 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-mono text-amber-500/60">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-100 group-hover:text-amber-400 transition-colors duration-200">
                          {project.name}
                        </h3>
                      </div>
                      <p className="text-neutral-500 leading-relaxed mb-6 max-w-2xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-400 bg-neutral-800 rounded-md border border-neutral-700/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-amber-400 border border-amber-400/20 rounded-xl bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/40 transition-all duration-200 shrink-0"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">
              Skills &amp; Expertise
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mb-16" />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-5">
                  Frontend
                </h3>
                <ul className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-neutral-400 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500 mr-3 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-5">
                  Backend
                </h3>
                <ul className="space-y-3">
                  {skills.backend.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-neutral-400 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-500 mr-3 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.384 3.18A1.502 1.502 0 013.999 17.1V6.9a1.502 1.502 0 012.036-1.25l5.384 3.18m0 0l5.384-3.18A1.502 1.502 0 0118.84 6.9v10.2a1.502 1.502 0 01-2.036 1.25l-5.384-3.18m0 0V6.335m0 5.669v3.165"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-5">
                  Tools
                </h3>
                <ul className="space-y-3">
                  {skills.tools.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-neutral-400 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mr-3 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Let&apos;s Work Together
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mb-8 mx-auto" />
            <p className="text-neutral-500 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
              I am always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to
              connect, feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="mailto:muhammedgumus@outlook.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-neutral-950 font-bold rounded-xl hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/muhammedgumus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-700 text-neutral-300 font-semibold rounded-xl hover:border-neutral-500 hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/muhammedgumus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-700 text-neutral-300 font-semibold rounded-xl hover:border-neutral-500 hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-neutral-800/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © {currentYear} Muhammed Gümüş. Crafted with Next.js &amp;
            Tailwind CSS.
          </p>
          <p className="text-neutral-700 text-xs tracking-wide">
            Istanbul, Türkiye
          </p>
        </div>
      </footer>
    </div>
  );
}
