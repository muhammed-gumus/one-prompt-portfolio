import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-center text-white px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-30%] right-[-15%] h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute top-[20%] left-[40%] h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Coding Experiment — 2025
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95]">
          One Prompt.{' '}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Four AI Models.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
          We gave the <strong className="text-white">exact same prompt</strong> to four different AI models
          and asked each to build a complete portfolio landing page.
          <span className="text-gray-500"> No edits. No guidance. Pure AI output.</span>
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">4</span>
            <span>AI Models</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">1</span>
            <span>Identical Prompt</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">0</span>
            <span>Edits Made</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link
            href="#models"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-all hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
          >
            Explore the Portfolios
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
          <Link
            href="#experiment"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25"
          >
            How It Works
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-600 text-xs">
        <span>Scroll to explore</span>
        <div className="h-8 w-px bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
