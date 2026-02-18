import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black text-center text-white px-4">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600 blur-[120px]" />
        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
        <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frontend Experiment
          </span>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          One Prompt. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Four AI Models.
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
          We gave the exact same prompt to Gemini 1.5 Pro, Claude 3.5 Sonnet, GPT-4o, and Llama 3 70b. 
          See how they designed and built a personal portfolio.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link 
            href="#models"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105"
          >
            Explore the Portfolios
            <svg 
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
          <Link
            href="#experiment"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <span className="mr-2">How it works</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
