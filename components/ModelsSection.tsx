import ModelCard from './ModelCard';

export default function ModelsSection() {
  const models = [
    {
      name: "Gemini 1.5 Pro",
      provider: "Google",
      description: "A large-scale multimodal model known for its massive context window and reasoning capabilities. Did it leverage its context to create a comprehensive portfolio?",
      slug: "/gemini-3-pro",
      color: "blue"
    },
    {
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      description: "Renowned for its natural language nuance and code generation abilities. Did it focus on clean code and subtle design details?",
      slug: "/claude-sonnet-4-5",
      color: "orange"
    },
    {
      name: "GPT-4o",
      provider: "OpenAI",
      description: "The flagship omni-model with strong reasoning and creative capabilities. Did it produce a balanced and polished result?",
      slug: "/gpt-4o",
      color: "green"
    },
    {
      name: "Llama 3 70b",
      provider: "Meta",
      description: "An open-weight powerhouse known for efficiency and performance. Did it prove that open models can compete with propriety giants?",
      slug: "/llama-3-70b",
      color: "purple"
    }
  ];

  return (
    <section id="models" className="bg-black py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            The Contenders
          </h2>
          <p className="text-lg text-gray-400">
            Four powerful AI models. One identical prompt. Explore the results below.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => (
            <ModelCard 
              key={model.slug}
              {...model}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
