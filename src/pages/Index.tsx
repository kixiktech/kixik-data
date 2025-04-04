
import React from 'react';
import Logo from '@/components/Logo';
import TrapCircle from '@/components/TrapCircle';
import ApplicationForm from '@/components/ApplicationForm';
import GoldLogo from '@/components/GoldLogo';
import { Separator } from '@/components/ui/separator';
import ComparisonTables from '@/components/ComparisonTables';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-gold">
      {/* Header */}
      <header className="container mx-auto py-8 px-6">
        <Logo />
      </header>

      {/* Hero Section: The Invitation to Power */}
      <section className="container mx-auto px-6 mt-16 md:mt-32 text-center max-w-5xl">
        <GoldLogo />
        <h1 className="text-3xl md:text-5xl terminal-text gold-glow mb-12">
          The Hidden Lead Data Scaling AI<br />
          Agencies to $100k/Month
        </h1>
        <p className="text-xl md:text-2xl terminal-text max-w-3xl mx-auto text-gold/80 mb-16">
          Why top agencies quietly stopped competing for scraps—and how<br className="hidden md:block" />
          they're monopolizing niches using our proprietary lead system
        </p>
        <button className="gold-button text-base md:text-lg">
          APPLY FOR PARTNERSHIP REVIEW →
        </button>
      </section>

      {/* Section 1: The Mirror (Problem Reflection) */}
      <section className="container mx-auto px-6 py-36 md:py-48 max-w-6xl">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-28">
          The 3 Deadly Traps Killing AI Agencies (You're Likely in One Now)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <TrapCircle number={1} />
            </div>
            <h3 className="terminal-text text-xl mb-6">Saturation Suffocation</h3>
            <p className="terminal-text leading-relaxed">
              Your outreach blends into 2,341 identical offers flooding 
              decision-makers' inboxes daily.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <TrapCircle number={2} />
            </div>
            <h3 className="terminal-text text-xl mb-6">Cold Lead Fatigue</h3>
            <p className="terminal-text leading-relaxed">
              Wasting 73% of your time chasing businesses who think 
              they want automation vs. those actively hunting for it.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <TrapCircle number={3} />
            </div>
            <h3 className="terminal-text text-xl mb-6">Community Cannibalism</h3>
            <p className="terminal-text leading-relaxed">
              Following the same 'proven' playbook as every course 
              graduate—racing to the bottom while pretending success is one 
              more tactic away.
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl terminal-text text-center mt-36 gold-glow max-w-4xl mx-auto">
          You didn't start an agency to become another replaceable cog in the AI gold rush.
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
            
            <div className="mt-24 border-2 border-gold p-6 md:p-8 bg-dark-200/50 rounded-md">
              <p className="terminal-text text-xl text-center mx-auto max-w-3xl gold-glow">
                "Our partner agencies are landing clients within 7 days using our high-intent data and quick scaling system."
              </p>
            </div>
            
            <p className="terminal-text text-xl text-center mt-12 mx-auto max-w-3xl">
              "Last Thursday, 7 agencies closed $297k in combined contracts from leads we delivered 14 days prior."
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Elixir (Solution Revelation) */}
      <section className="container mx-auto px-6 py-36 md:py-48 max-w-6xl">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
          Your New Reality as a Partner Agency
        </h2>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="border border-gold/30 p-8 md:p-12">
            <h3 className="terminal-text text-2xl mb-6">Precision Nuclear Targeting</h3>
            <p className="terminal-text">
              "We track prospects who searched for exact solutions you offer 3.2x before contacting you."
            </p>
          </div>

          <div className="border border-gold/30 p-8 md:p-12">
            <h3 className="terminal-text text-2xl mb-6">CRM Autoload System</h3>
            <p className="terminal-text">
              "Hot leads auto-populate in your HubSpot/Salesforce before they finish reading your competitor's outdated blog."
            </p>
          </div>

          <div className="border border-gold/30 p-8 md:p-12">
            <h3 className="terminal-text text-2xl mb-6">Ghost Competition Protocol</h3>
            <p className="terminal-text">
              "We never sell similar niches—your territory remains yours alone."
            </p>
          </div>
        </div>
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
  );
};

export default Index;
