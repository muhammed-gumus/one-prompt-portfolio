'use client';

import { useState } from 'react';

const PROMPT_TEXT = `This is NOT a code generation task.

You are operating in agent mode inside a real Next.js 13+ project.

Your job is to CREATE a new route and WRITE the file into the project.

Do not print code as chat output.
Do not explain anything.
Do not return markdown.

You must perform file system actions.

====================================================

Create a new route under:

src/app/MODEL_SLUG/page.tsx

Replace MODEL_SLUG with:
<<< INSERT SLUG HERE >>>

Example:
gemini-3-pro
claude-sonnet-4-5
gpt-4o
llama-3-70b

====================================================

Inside that file, implement a fully working portfolio landing page for:

Muhammed Gümüş
Frontend Developer & Product Developer

Requirements:

- Next.js App Router
- TypeScript
- Tailwind CSS
- No external libraries
- No empty links
- No "#"
- Fully responsive
- Dynamic year in footer
- Must compile without errors

You are allowed to create additional components if needed,
but they must be placed properly inside the project.

After creating the file(s), stop.

Do not output code in chat.
Perform the action.`;

export default function PromptSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = PROMPT_TEXT;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-xs font-medium text-gray-500">prompt.txt</span>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-400 transition-all hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/[0.12] active:scale-95"
              >
                {copied ? (
                  <>
                    <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Prompt Content */}
            <div className="p-6 sm:p-8 overflow-x-auto">
              <pre className="text-sm leading-relaxed text-gray-400 whitespace-pre-wrap font-mono">
                <span className="text-gray-300">{`This is NOT a code generation task.\n\n`}</span>
                <span className="text-gray-300">{`You are operating in agent mode inside a real Next.js 13+ project.\n\n`}</span>
                <span className="text-gray-300">{`Your job is to CREATE a new route and WRITE the file into the project.\n\n`}</span>
                <span className="text-gray-500">{`Do not print code as chat output.\nDo not explain anything.\nDo not return markdown.\n\n`}</span>
                <span className="text-gray-500">{`You must perform file system actions.\n\n`}</span>
                <span className="text-gray-600">{`====================================================\n\n`}</span>
                <span className="text-gray-300">{`Create a new route under:\n\n`}</span>
                <span className="text-violet-400">{`src/app/MODEL_SLUG/page.tsx\n\n`}</span>
                <span className="text-gray-300">{`Replace MODEL_SLUG with:\n`}</span>
                <span className="text-amber-400">{`<<< INSERT SLUG HERE >>>\n\n`}</span>
                <span className="text-gray-500">{`Example:\ngemini-3-pro\nclaude-sonnet-4-5\ngpt-4o\nllama-3-70b\n\n`}</span>
                <span className="text-gray-600">{`====================================================\n\n`}</span>
                <span className="text-gray-300">{`Inside that file, implement a fully working portfolio landing page for:\n\n`}</span>
                <span className="text-white font-semibold">{`Muhammed Gümüş\n`}</span>
                <span className="text-blue-400">{`Frontend Developer & Product Developer\n\n`}</span>
                <span className="text-gray-300">{`Requirements:\n\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`Next.js App Router\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`TypeScript\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`Tailwind CSS\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`No external libraries\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`No empty links\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`No "#"\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`Fully responsive\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`Dynamic year in footer\n`}</span>
                <span className="text-emerald-400/80">{`- `}</span><span className="text-gray-300">{`Must compile without errors\n\n`}</span>
                <span className="text-gray-300">{`You are allowed to create additional components if needed,\nbut they must be placed properly inside the project.\n\n`}</span>
                <span className="text-gray-300">{`After creating the file(s), stop.\n\n`}</span>
                <span className="text-gray-500">{`Do not output code in chat.\n`}</span>
                <span className="text-gray-500">{`Perform the action.`}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
