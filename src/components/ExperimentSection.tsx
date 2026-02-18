export default function ExperimentSection() {
  const steps = [
    {
      number: '01',
      title: 'Setup the Project',
      description: 'Created a fresh Next.js 13+ project with TypeScript and Tailwind CSS. No additional libraries or configurations — just the bare framework.',
    },
    {
      number: '02',
      title: 'Write One Prompt',
      description: 'Crafted a single, detailed prompt specifying requirements: responsive design, dynamic footer, no empty links, no external libraries, and working code.',
    },
    {
      number: '03',
      title: 'Run on Four Models',
      description: 'Gave the exact same prompt to Gemini 3 Pro, Gemini 3 Flash, Claude Sonnet 4.5, and Claude Opus 4.6 — each operating in agent mode with file system access.',
    },
    {
      number: '04',
      title: 'Zero Edits, Ship Raw',
      description: 'Every model\'s output was committed as-is. No manual fixes, no styling adjustments, no refactoring. What you see is pure AI output.',
    },
  ];

  return (
    <section id="experiment" className="relative bg-black py-28 text-white overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">
            Methodology
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            How the Experiment Works
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            A controlled test to see how different AI models interpret and execute
            the same frontend development task — with no human intervention.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
            >
              <span className="mb-4 block text-3xl font-black text-white/[0.06] transition-colors group-hover:text-violet-500/20">
                {step.number}
              </span>
              <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
