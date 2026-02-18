import Hero from '@/components/Hero';
import ExperimentSection from '@/components/ExperimentSection';
import PromptSection from '@/components/PromptSection';
import ModelsSection from '@/components/ModelsSection';
import ComparisonSection from '@/components/ComparisonSection';
import FindingsSection from '@/components/FindingsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 selection:text-white">
      <Hero />
      <ExperimentSection />
      <PromptSection />
      <ModelsSection />
      <ComparisonSection />
      <FindingsSection />
      <Footer />
    </main>
  );
}
