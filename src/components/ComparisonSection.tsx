export default function ComparisonSection() {
  const rows = [
    { label: 'Lines of Code', geminiPro: '329', geminiFlash: '247', sonnet: '292', opus: '459' },
    { label: 'Theme', geminiPro: 'Dark', geminiFlash: 'Light ☀️', sonnet: 'Dark', opus: 'Dark' },
    { label: 'Accent Color', geminiPro: 'Purple', geminiFlash: 'Indigo', sonnet: 'Cyan', opus: 'Amber' },
    { label: 'Navigation', geminiPro: '✅ Fixed', geminiFlash: '✅ Fixed', sonnet: '❌ None', opus: '✅ Fixed' },
    { label: 'Animations', geminiPro: 'Minimal', geminiFlash: 'Hover Lift', sonnet: 'Scale + Glow', opus: 'Pulse + Glow' },
    { label: 'Icons', geminiPro: 'SVG Components', geminiFlash: 'Text Labels', sonnet: 'Inline SVG', opus: 'Inline SVG' },
    { label: 'Background FX', geminiPro: 'Radial Gradient', geminiFlash: 'None', sonnet: 'Multi-stop Gradient', opus: 'Blur Glow' },
  ];

  return (
    <section id="comparison" className="relative bg-black py-28 text-white overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4">
            Side by Side
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Comparison
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            A quick breakdown of how each model&apos;s output differs across key dimensions.
          </p>
        </div>

        {/* Table */}
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden min-w-[640px]">
            {/* Header */}
            <div className="grid grid-cols-5 gap-px bg-white/[0.04]">
              <div className="bg-black p-4 text-xs font-semibold uppercase tracking-wider text-gray-600">
                Criteria
              </div>
              <div className="bg-black p-4 text-center">
                <span className="text-xs font-bold text-blue-400">Gemini Pro</span>
              </div>
              <div className="bg-black p-4 text-center">
                <span className="text-xs font-bold text-blue-400">Gemini Flash</span>
              </div>
              <div className="bg-black p-4 text-center">
                <span className="text-xs font-bold text-orange-400">Sonnet 4.5</span>
              </div>
              <div className="bg-black p-4 text-center">
                <span className="text-xs font-bold text-orange-400">Opus 4.6</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-5 gap-px ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.01]'}`}
              >
                <div className="bg-black/50 p-4 text-sm font-medium text-gray-300">{row.label}</div>
                <div className="bg-black/50 p-4 text-center text-sm text-gray-500">{row.geminiPro}</div>
                <div className="bg-black/50 p-4 text-center text-sm text-gray-500">{row.geminiFlash}</div>
                <div className="bg-black/50 p-4 text-center text-sm text-gray-500">{row.sonnet}</div>
                <div className="bg-black/50 p-4 text-center text-sm text-gray-500">{row.opus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
