export default function PromptSection() {
  return (
    <section id="prompt" className="relative bg-black py-28 text-white overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-4">
            The Prompt
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            What We Asked
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every model received this <strong className="text-white">exact prompt</strong> — word for word.
            The only variable was the <code className="rounded bg-white/10 px-2 py-0.5 text-sm text-violet-400">MODEL_SLUG</code> value.
          </p>
        </div>

        {/* Prompt Display */}
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0f] overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-3 text-xs font-medium text-gray-500">prompt.txt</span>
            </div>

            {/* Prompt Content */}
            <div className="p-6 sm:p-8 overflow-x-auto">
              <pre className="text-sm leading-relaxed text-gray-400 whitespace-pre-wrap font-mono">
                <span className="text-gray-600">{`# Instructions\n`}</span>
                <span className="text-gray-300">{`This is NOT a code generation task.\n`}</span>
                <span className="text-gray-300">{`You are operating in agent mode inside a real Next.js 13+ project.\n`}</span>
                <span className="text-gray-300">{`Your job is to CREATE a new route and WRITE the file into the project.\n\n`}</span>
                <span className="text-gray-600">{`# Route\n`}</span>
                <span className="text-gray-300">{`Create a new route under: `}<span className="text-violet-400">src/app/MODEL_SLUG/page.tsx</span>{`\n\n`}</span>
                <span className="text-gray-600">{`# Task\n`}</span>
                <span className="text-gray-300">{`Implement a fully working portfolio landing page for:\n`}</span>
                <span className="text-white font-semibold">{`Muhammed Gümüş\n`}</span>
                <span className="text-blue-400">{`Frontend Developer & Product Developer\n\n`}</span>
                <span className="text-gray-600">{`# Requirements\n`}</span>
                <span className="text-emerald-400/80">{`✓ `}</span><span className="text-gray-300">{`Next.js App Router + TypeScript + Tailwind CSS\n`}</span>
                <span className="text-emerald-400/80">{`✓ `}</span><span className="text-gray-300">{`No external libraries\n`}</span>
                <span className="text-emerald-400/80">{`✓ `}</span><span className="text-gray-300">{`No empty links, No "#" hrefs\n`}</span>
                <span className="text-emerald-400/80">{`✓ `}</span><span className="text-gray-300">{`Fully responsive\n`}</span>
                <span className="text-emerald-400/80">{`✓ `}</span><span className="text-gray-300">{`Dynamic year in footer\n`}</span>
                <span className="text-emerald-400/80">{`✓ `}</span><span className="text-gray-300">{`Must compile without errors`}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
