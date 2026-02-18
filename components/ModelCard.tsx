import Link from 'next/link';

interface ModelCardProps {
  name: string;
  description: string;
  slug: string;
  color: string;
  provider: string;
}

export default function ModelCard({ name, description, slug, color, provider }: ModelCardProps) {
  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/5 group-hover:border-blue-500/50",
    green: "from-green-500/20 to-green-600/5 group-hover:border-green-500/50",
    orange: "from-orange-500/20 to-orange-600/5 group-hover:border-orange-500/50",
    purple: "from-purple-500/20 to-purple-600/5 group-hover:border-purple-500/50",
  };

  const btnColorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  const selectedBtnColor = btnColorClasses[color as keyof typeof btnColorClasses] || btnColorClasses.blue;

  return (
    <Link 
      href={slug}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${selectedColor} p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5`}
    >
      <div className="absolute right-0 top-0 p-4 opacity-50 transition-opacity group-hover:opacity-100">
         <svg className="h-24 w-24 text-white/5" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
         </svg>
      </div>

      <div className="relative z-10">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
            {provider}
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-white transition-colors">{name}</h3>
        <p className="mb-6 text-sm text-gray-300 line-clamp-3">{description}</p>
      </div>

      <div className="relative z-10 mt-auto">
        <span className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors ${selectedBtnColor}`}>
          View Generated Portfolio
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
