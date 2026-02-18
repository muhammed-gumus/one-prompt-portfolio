import ModelCard from './ModelCard';

export default function ModelsSection() {
  const models = [
    {
      name: 'Gemini 3 Pro',
      provider: 'Google',
      description:
        'Minimalist dark design with custom SVG icon components. Extracted reusable icons, used radial gradient backgrounds and a restrained purple palette.',
      slug: '/gemini-3-pro',
      color: 'blue',
      lines: 329,
      theme: 'Dark Theme',
      accent: 'Purple',
      highlight: 'Custom Icons',
    },
    {
      name: 'Gemini 3 Flash',
      provider: 'Google',
      description:
        'The only model to choose a light theme. Clean corporate feel with indigo accents, shadow-based depth, and text-only social icons.',
      slug: '/gemini-3-flash',
      color: 'blue',
      lines: 247,
      theme: 'Light Theme ☀️',
      accent: 'Indigo',
      highlight: 'Minimal Code',
    },
    {
      name: 'Claude Sonnet 4.5',
      provider: 'Anthropic',
      description:
        'Dramatic dark gradient with cyan glow effects. Heavy use of glassmorphism, scale animations, and the only model to skip the navigation bar.',
      slug: '/claude-sonnet-4-5',
      color: 'orange',
      lines: 292,
      theme: 'Dark Theme',
      accent: 'Cyan',
      highlight: 'No Navbar',
    },
    {
      name: 'Claude Opus 4.6',
      provider: 'Anthropic',
      description:
        'The most sophisticated output — warm amber palette, animated pulse badges, numbered project indices, and ambient blur glow effects.',
      slug: '/claude-opus-4-6',
      color: 'orange',
      lines: 459,
      theme: 'Dark Theme',
      accent: 'Amber',
      highlight: 'Most Code',
    },
  ];

  return (
    <section id="models" className="relative bg-black py-28 text-white overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/[0.03] blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-4">
            Results
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            The Portfolios
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Four AI models. One identical prompt. Each link takes you to the
            <strong className="text-white"> raw, unedited output</strong> of that model.
          </p>
        </div>

        {/* Models Grid */}
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2">
          {models.map((model) => (
            <ModelCard key={model.slug} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
}
