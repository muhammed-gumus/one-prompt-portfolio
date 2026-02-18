export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-center text-white">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-gray-400">
          Designed & Built by <a href="https://twitter.com/resonk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Muhammed Gümüş</a>
        </p>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} AI Portfolio Experiment. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
