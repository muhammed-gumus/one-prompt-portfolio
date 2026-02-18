export default function ExperimentSection() {
  return (
    <section id="experiment" className="bg-black py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-gray-100">
            The Experiment
          </h2>
          <p className="mb-12 text-lg text-gray-400">
            Can AI replace a frontend developer? Not yet, but let's see how close it gets.
            The goal was to test raw generation capabilities without human intervention.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "The Prompt",
              description: "A single, detailed prompt describing a personal portfolio website with specific sections and requirements.",
              icon: "📝"
            },
            {
              title: "The Rules",
              description: "No follow-up prompts. No manual code fixes. No external libraries unless suggested by the AI.",
              icon: "rules" 
            },
            {
              title: "The Result",
              description: "Four distinct interpretations of the same requirement, showcasing the unique 'personality' of each model.",
              icon: "✨"
            }
          ].map((item, index) => (
             <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-2xl text-white">
                 {index === 0 ? (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                 ) : index === 1 ? (
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                 ) : (
                  <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                 )}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
