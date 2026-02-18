export default function FindingsSection() {
  const findings = [
    {
      icon: '🎨',
      title: 'Design Personality Emerged',
      description: 'Each model developed a distinct visual identity — from minimalist professional to warm and sophisticated — despite receiving identical instructions.',
    },
    {
      icon: '🌙',
      title: 'Dark Mode is the Default',
      description: 'Three out of four models chose a dark theme. Only Gemini 3 Flash went light — suggesting dark mode is a trained default in modern AI models.',
    },
    {
      icon: '📏',
      title: 'Code Volume ≠ Quality',
      description: 'Claude Opus produced 459 lines, nearly 2× Gemini Flash\'s 247. The extra lines added visual polish, but Flash proved minimal can be effective.',
    },
    {
      icon: '📦',
      title: 'Single-File Preference',
      description: 'Despite being allowed to create additional components, every model kept everything in a single page.tsx — optimizing for self-containment.',
    },
    {
      icon: '✅',
      title: 'All Constraints Met',
      description: 'Every model produced compilable code with dynamic year, real links (no "#"), responsive layouts, and zero runtime errors.',
    },
    {
      icon: '🧭',
      title: 'Structural Differences',
      description: 'Only Gemini Pro extracted reusable icon components. Only Claude Sonnet used "use client". Only Claude Sonnet skipped the navigation bar entirely.',
    },
  ];

  return (
    <section id="findings" className="relative bg-black py-28 text-white overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Analysis
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Key Findings
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            What we learned from comparing four AI-generated portfolios — patterns, surprises, and insights.
          </p>
        </div>

        {/* Findings Grid */}
        <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {findings.map((finding) => (
            <div
              key={finding.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
            >
              <span className="mb-4 block text-2xl">{finding.icon}</span>
              <h3 className="mb-2 text-base font-bold text-white">{finding.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{finding.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
