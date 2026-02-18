import Link from 'next/link';

interface ModelCardProps {
  name: string;
  description: string;
  slug: string;
  color: string;
  provider: string;
  lines: number;
  theme: string;
  accent: string;
  highlight: string;
}

export default function ModelCard({
  name,
  description,
  slug,
  color,
  provider,
  lines,
  theme,
  accent,
  highlight,
}: ModelCardProps) {
  const colorMap: Record<string, { card: string; btn: string; badge: string; glow: string }> = {
    blue: {
      card: 'hover:border-blue-500/30',
      btn: 'bg-blue-600 hover:bg-blue-500',
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      glow: 'group-hover:bg-blue-500/5',
    },
    orange: {
      card: 'hover:border-orange-500/30',
      btn: 'bg-orange-600 hover:bg-orange-500',
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      glow: 'group-hover:bg-orange-500/5',
    },
  };

  const c = colorMap[color] || colorMap.blue;

  return (
    <Link
      href={slug}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 ${c.card}`}
    >
      {/* Hover Glow */}
      <div className={`absolute inset-0 rounded-2xl transition-colors duration-500 ${c.glow}`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Provider Badge */}
        <div className="flex items-center justify-between mb-5">
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${c.badge}`}>
            {provider}
          </span>
          <span className="text-xs text-gray-600 font-mono">{lines} lines</span>
        </div>

        {/* Model Name */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-500 leading-relaxed line-clamp-3">{description}</p>

        {/* Stats */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-gray-400">
            {theme}
          </span>
          <span className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-gray-400">
            {accent}
          </span>
          <span className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-gray-400">
            {highlight}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <span
            className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 ${c.btn}`}
          >
            View Portfolio
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
