import React from 'react';
import Logo from '@/components/Logo';
import TrapCircle from '@/components/TrapCircle';
import ApplicationForm from '@/components/ApplicationForm';
import GoldLogo from '@/components/GoldLogo';
import { Separator } from '@/components/ui/separator';
import ComparisonTables from '@/components/ComparisonTables';
import TestimonialsSection from '@/components/TestimonialsSection';
import GrainOverlay from '@/components/GrainOverlay';
import CornerLogo from '@/components/CornerLogo';

const Index = () => {
  return <>
      <GrainOverlay />
      <div className="min-h-screen bg-black text-gold">
        {/* Header */}
        <header className="container mx-auto py-8 px-6 flex justify-between items-center">
          <Logo />
          <CornerLogo />
        </header>

        {/* Hero Section: The Invitation to Power */}
        <section className="container mx-auto px-6 mt-16 md:mt-32 text-center max-w-5xl">
          <GoldLogo />
          <h1 className="text-3xl md:text-5xl terminal-text gold-glow mb-12 px-[32px]">The High-Intent Data That Unlocks Growth Like a Cheat Code</h1>
          <p className="text-xl md:text-2xl terminal-text max-w-3xl mx-auto text-gold/80 mb-16">
            Our algorithmic data engine watches +200 billion signals/week and hands you the people already hunting for what you sell.
          </p>
          <button className="gold-button text-base md:text-lg">
            APPLY FOR PARTNERSHIP REVIEW →
          </button>
        </section>

        {/* Section 1: Pain Points */}
        <section className="container mx-auto px-6 md:py-48 max-w-6xl py-[92px]">
          <div className="w-full max-w-[800px] mx-auto mb-16">
            <img 
              src="/lovable-uploads/5b856b5c-252d-4377-bc63-a542828574ec.png"
              alt="3D gold wave pattern visualization"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl terminal-text text-gold mb-8">
              You're Doing Everything Right, But Using Confusing Tactics.
            </h2>
            
            <p className="text-xl md:text-2xl terminal-text text-gold/80 leading-relaxed">
              You're skilled, your offer is sharp, yet outreach feels like shouting into emptiness. Cold leads drain your energy, marketing platforms bleed your budget, and every competitor sounds exactly the same.
            </p>
            
            <p className="text-xl md:text-2xl terminal-text gold-glow italic">
              It's not you—it's the outdated/irrelevant data everyone else also relies on.
            </p>
            
            <div className="mt-12">
              <button className="gold-button text-base md:text-lg">
                Discover the Hidden Advantage
              </button>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl terminal-text text-white text-center mb-20">
            Why the Old Way Hurts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
              <h3 className="terminal-text text-xl mb-4 text-gold">Stale Data Déjà-Vu</h3>
              <p className="terminal-text leading-relaxed text-gold/80">
                Today's 'fresh' list is the same CEO who got ten cold emails yesterday—yours is email eleven.
              </p>
            </div>

            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
              <h3 className="terminal-text text-xl mb-4 text-gold">No Intent, No Pulse</h3>
              <p className="terminal-text leading-relaxed text-gold/80">
                Contacts with zero buying signal are like fish-shaped shadows—good luck hooking one.
              </p>
            </div>

            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
              <h3 className="terminal-text text-xl mb-4 text-gold">Crowded Feeding Frenzy</h3>
              <p className="terminal-text leading-relaxed text-gold/80">
                Those lists go to every agency, so the only trick left is cutting price—and cutting deeper.
              </p>
            </div>

            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
              <h3 className="terminal-text text-xl mb-4 text-gold">Time Slip</h3>
              <p className="terminal-text leading-relaxed text-gold/80">
                Every ghost lead steals another hour you could spend on delivery or, you know, sleeping.
              </p>
            </div>

            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors md:col-span-2">
              <h3 className="terminal-text text-xl mb-4 text-gold">Budget Bleed</h3>
              <p className="terminal-text leading-relaxed text-gold/80">
                Ad platforms charge more each week while showing your ads to look-and-leave window-shoppers.
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl terminal-text text-center mt-24 gold-glow max-w-4xl mx-auto">
            Feel any of that in your gut? Scroll—relief is seconds away.
          </p>
        </section>

        {/* Section 2: The Bridge (Authority Demonstration) */}
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

        {/* Section 3: The Elixir (Solution Revelation) */}
        <section className="container mx-auto px-6 md:py-48 max-w-6xl py-[78px]">
          <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
            Your New Reality as a Kixik Partner
          </h2>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="border border-gold/30 p-8 md:p-12">
              <h3 className="terminal-text text-2xl mb-6">Precision Nuclear Targeting</h3>
              <p className="terminal-text">
                We track prospects who searched for exact solutions you offer 3.2x before contacting you.
              </p>
            </div>

            <div className="border border-gold/30 p-8 md:p-12">
              <h3 className="terminal-text text-2xl mb-6">CRM Autoload System</h3>
              <p className="terminal-text">
                Hot leads auto-populate in your HubSpot/Salesforce before they finish reading your competitor's outdated blog.
              </p>
            </div>

            <div className="border border-gold/30 p-8 md:p-12">
              <h3 className="terminal-text text-2xl mb-6">Ghost Competition Protocol</h3>
              <p className="terminal-text">
                We never sell similar niches—your territory remains yours alone.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Case Studies & Testimonials */}
        <section className="container mx-auto max-w-6xl py-0 px-[40px]">
          <TestimonialsSection />
        </section>

        {/* Section 5: The Threshold (CTA) */}
        <section className="container mx-auto px-6 py-36 md:py-48 max-w-6xl">
          <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-20">
            Your Next 45 Days Will Determine the Next 45 Years
          </h2>

          <ApplicationForm />
        </section>

        {/* Footer */}
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
