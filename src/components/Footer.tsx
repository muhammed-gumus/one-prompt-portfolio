export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.06] py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            One Prompt Portfolio
          </span>

          {/* Description */}
          <p className="text-sm text-gray-500 max-w-md leading-relaxed">
            An open-source experiment comparing how different AI models build the same frontend project from a single prompt.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/muhammed-gumus/one-prompt-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-800">·</span>
            <a
              href="https://github.com/muhammed-gumus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              @muhammed-gumus
            </a>
            <span className="text-gray-800">·</span>
            <a
              href="https://linkedin.com/in/muhammedgums"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.04] my-2" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Muhammed Gümüş</p>
            <p>Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
