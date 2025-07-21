import React from 'react';
import Logo from '@/components/Logo';
import TrapCircle from '@/components/TrapCircle';
import ApplicationForm from '@/components/ApplicationForm';
import GoldLogo from '@/components/GoldLogo';
import { Separator } from '@/components/ui/separator';
import ComparisonTables from '@/components/ComparisonTables';
import GrainOverlay from '@/components/GrainOverlay';
import CornerLogo from '@/components/CornerLogo';
import CalButton from '@/components/CalButton';
import DataMetricsVisual from '@/components/DataMetricsVisual';
import { Link } from 'react-router-dom';
const Index = () => {
  return <>
    <GrainOverlay />
    <div className="min-h-screen bg-black text-gold">
      <header className="container mx-auto py-8 px-6 flex justify-between items-center">
        <Logo />
        <CornerLogo />
      </header>

      <section className="container mx-auto px-6 mt-16 md:mt-32 text-center max-w-5xl">
        <GoldLogo />
        <h1 className="text-3xl md:text-5xl terminal-text gold-glow mb-12 px-[32px]">A World-Class Team of Analysts and Data Scientists.
On Demand.</h1>
        <p className="text-xl md:text-2xl terminal-text max-w-3xl mx-auto text-gold/80 mb-16">No software to learn. No dashboards to build. Just answers you can act on right now. What used to be a luxury reserved for the biggest companies is now your unfair advantage.</p>
        <CalButton className="text-base md:text-lg">
          APPLY FOR PARTNERSHIP REVIEW →
        </CalButton>
      </section>

      {/* Data Metrics Visual Section */}
      <DataMetricsVisual />

      <section className="container mx-auto px-6 md:py-48 max-w-6xl py-[92px]">
        <h2 className="text-3xl md:text-4xl terminal-text text-white text-center mb-20 px-[35px]">Here's Why You're Currently Playing a Losing Game. And How We Can Help.</h2>
        
        <div className="w-full max-w-[800px] mx-auto mb-16">
          <img src="/lovable-uploads/5b856b5c-252d-4377-bc63-a542828574ec.png" alt="3D gold wave pattern visualization" className="w-full h-auto rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
            <h3 className="terminal-text text-xl mb-4 text-gold">Decisions by Gut, Not Data</h3>
            <p className="terminal-text leading-relaxed text-gold/80">We arm you with fact‑backed insight so you never have to guess again.</p>
          </div>

          <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
            <h3 className="terminal-text text-xl mb-4 text-gold">Hidden Margin Leaks</h3>
            <p className="terminal-text leading-relaxed text-gold/80">We pinpoint exactly where profit is slipping through the cracks.</p>
          </div>

          <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
            <h3 className="terminal-text text-xl mb-4 text-gold">Buried in Data Chaos</h3>
            <p className="terminal-text leading-relaxed text-gold/80">We cut through your raw numbers and reveal the handful of metrics that matter.</p>
          </div>

          <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
            <h3 className="terminal-text text-xl mb-4 text-gold">Slow, Manual Reports</h3>
            <p className="terminal-text leading-relaxed text-gold/80">We deliver on‑demand, drill‑down analyses so you stay three steps ahead.</p>
          </div>

        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 mt-24">
          <h2 className="text-3xl md:text-4xl terminal-text text-gold mb-8">You're Trying to Do Everything Right... But You’re Flying Blind.</h2>
          
          <p className="text-xl md:text-2xl terminal-text text-gold/80 leading-relaxed">You know your business inside‑out, yet outdated reports and generic dashboards leave you guessing. Hours spent building spreadsheets, chasing stale metrics, and wondering which levers actually drive profit. It’s not you — it’s the data.</p>
          
          <p className="text-xl md:text-2xl terminal-text gold-glow italic">With Kixik’s on‑demand analytics service, you send us your numbers and we transform them into clear, action‑ready insights. We uncover hidden revenue streams, plug costly leaks, and give you the focus you need to win.</p>
          
          <div className="mt-12">
            <CalButton className="text-base md:text-lg">
              Discover the Hidden Advantage
            </CalButton>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-36 md:py-48 bg-dark-100 max-w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
            How We Extract Gold from Noise
          </h2>

          <div className="max-w-4xl mx-auto">
            <ComparisonTables />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:py-48 bg-black max-w-6xl py-[88px]">
        <div className="max-w-4xl mx-auto space-y-24">
          <h2 className="text-4xl md:text-5xl terminal-text gold-glow text-center leading-tight">The Secret Edge Big Companies Have — Now Yours to Use</h2>

          <div className="w-full max-w-[250px] mx-auto mb-16">
            <img alt="Golden lighthouse illuminating binary data" src="/lovable-uploads/c70d4628-b80c-4049-9af1-d45a69f7f374.png" className="w-full h-auto opacity-80 object-fill" />
          </div>

          <p className="text-xl md:text-2xl text-gold/80 text-center leading-relaxed max-w-3xl mx-auto">You always knew the top players had something you didn’t—ultra‑precise data that feels like a sneak peek at tomorrow.</p>

          <p className="text-2xl md:text-3xl text-gold text-center">Until now, only the top 1% of businesses could get it. Before, you would have to build out a full team of in house data engineers and scientists. Everyone else relied on broad guesses and hope to grow.</p>

          <div className="space-y-16">
            <p className="text-lg md:text-xl text-gold/70 leading-relaxed">Kixik changes that. We unlock the same powerful intent data for you—showing exactly who’s ready to buy, when they’re shopping, and how to reach them.</p>

            <p className="text-lg md:text-xl text-gold/70 leading-relaxed">But market leaders don't hope — they know. They privately wield intent data so accurate, it's like having tomorrow's newspaper today. Data that pinpoints exactly who is looking, exactly when they're looking, and exactly how to reach them.</p>

            <p className="text-xl md:text-2xl text-gold font-bold">
              Until now, accessing that data was impossible unless you were part of the privileged 1%.
            </p>

            <p className="text-2xl md:text-3xl text-gold text-center">
              Today, that changes.
            </p>

            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gold/80 leading-relaxed">
                You've just uncovered Kixik Technologies—the hidden advantage behind countless quiet empires. Our elite-level intent data dissolves barriers, unlocks potential, and simplifies growth because you're only ever speaking to prospects who are already leaning forward. The people already looking for exactly what you are selling.
              </p>

              <p className="text-lg md:text-xl text-gold/80 leading-relaxed">
                Imagine, right now, the rush of possibility you're feeling—like discovering fire or harnessing electricity. A shift has already begun, and your business will never be the same.
              </p>

              <p className="text-xl md:text-2xl text-gold italic text-center mt-16">This is the hidden leverage you've waited your whole entrepreneurial life to find.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <CalButton className="text-base md:text-lg mx-[28px]">
              unlock elite data access →
            </CalButton>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:py-48 max-w-6xl py-[43px]">
        <div className="w-full max-w-[800px] mx-auto mb-16">
          <img src="/lovable-uploads/290d09a1-1a2c-4c1b-b77e-4ee036c29c5e.png" alt="Radar tracking interface showing US map" className="w-full h-auto opacity-80" />
        </div>

        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
          Your New Reality as a Kixik Partner
        </h2>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="border border-gold/30 p-8 md:p-12">
            <h3 className="terminal-text text-2xl mb-6">On‑Demand Insights</h3>
            <p className="terminal-text">Have a hunch or a new idea? We’ll build you a custom report fast so you can act immediately.</p>
          </div>

          <div className="border border-gold/30 p-8 md:p-12">
            <h3 className="terminal-text text-2xl mb-6">Hidden Profit Plans</h3>
            <p className="terminal-text">We uncover the untapped revenue hiding in your own data and hand you simple, ready‑to‑run money models.</p>
          </div>

          <div className="border border-gold/30 p-8 md:p-12">
            <h3 className="terminal-text text-2xl mb-6">Your On‑Call Data Team</h3>
            <p className="terminal-text">Access world‑class analysts and data scientists without the payroll—just expert answers when you need them.</p>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <CalButton className="text-base md:text-lg">
            Discover how our partners become Market Leaders
          </CalButton>
        </div>
      </section>

      <section className="container mx-auto px-6 py-36 md:py-48 max-w-6xl">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-20">
          Your Next 45 Days Will Determine the Next 45 Years
        </h2>

        <ApplicationForm />
      </section>

      <footer className="container mx-auto px-6 py-12 border-t border-gold/20 mt-16">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <p className="text-center text-gold/40 text-sm terminal-text">
          © {new Date().getFullYear()} KIXIK TECHNOLOGIES. All rights reserved.
        </p>
      </footer>
    </div>
  </>;
};
export default Index;