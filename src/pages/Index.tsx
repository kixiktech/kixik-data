
import React from 'react';
import Logo from '@/components/Logo';
import Keyhole from '@/components/Keyhole';
import TrapCircle from '@/components/TrapCircle';
import ApplicationForm from '@/components/ApplicationForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-gold">
      {/* Header */}
      <header className="container mx-auto pt-8 px-4">
        <Logo />
      </header>

      {/* Hero Section: The Invitation to Power */}
      <section className="container mx-auto px-4 mt-16 md:mt-32 text-center">
        <Keyhole />
        <h1 className="text-3xl md:text-5xl terminal-text gold-glow mb-6">
          The Hidden Playbook Scaling AI<br />
          Agencies to $100k/Month
        </h1>
        <p className="text-xl md:text-2xl terminal-text max-w-3xl mx-auto text-gold/80 mb-12">
          Why top agencies quietly stopped competing for scraps—and how<br />
          they're monopolizing niches using our proprietary lead system
        </p>
        <button className="gold-button text-base md:text-lg">
          APPLY FOR PARTNERSHIP REVIEW →
        </button>
      </section>

      {/* Section 1: The Mirror (Problem Reflection) */}
      <section className="container mx-auto px-4 section-spacing">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-20">
          The 3 Deadly Traps Killing AI Agencies (You're Likely in One Now)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <h3 className="terminal-text text-xl mb-6">Saturation Suffocation</h3>
            <div className="flex justify-center">
              <TrapCircle number={1} />
            </div>
            <p className="terminal-text leading-relaxed">
              Your outreach blends into 2,341 identical offers flooding 
              decision-makers' inboxes daily.
            </p>
          </div>

          <div className="text-center">
            <h3 className="terminal-text text-xl mb-6">Cold Lead Fatigue</h3>
            <div className="flex justify-center">
              <TrapCircle number={2} />
            </div>
            <p className="terminal-text leading-relaxed">
              Wasting 73% of your time chasing businesses who think 
              they want automation vs. those actively hunting for it.
            </p>
          </div>

          <div className="text-center">
            <h3 className="terminal-text text-xl mb-6">Community Cannibalism</h3>
            <div className="flex justify-center">
              <TrapCircle number={3} />
            </div>
            <p className="terminal-text leading-relaxed">
              Following the same 'proven' playbook as every course 
              graduate—racing to the bottom while pretending success is one 
              more tactic away.
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl terminal-text text-center mt-32 gold-glow max-w-4xl mx-auto">
          You didn't start an agency to become another replaceable cog in the AI gold rush.
        </p>
      </section>

      {/* Section 2: The Bridge (Authority Demonstration) */}
      <section className="container mx-auto px-4 section-spacing bg-dark-100">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-16">
          How We Extract Gold from Noise
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="border border-gold/30 mb-10">
            <div className="grid grid-cols-2 terminal-text">
              <div className="border-b border-r border-gold/30 p-4 text-center font-bold">Their Methods</div>
              <div className="border-b border-gold/30 p-4 text-center font-bold">Our Edge</div>
              
              <div className="border-b border-r border-gold/30 p-4">Generic LinkedIn scraping</div>
              <div className="border-b border-gold/30 p-4 text-gold">60B weekly behavioral signals</div>
              
              <div className="border-b border-r border-gold/30 p-4">Basic firmographics</div>
              <div className="border-b border-gold/30 p-4 text-gold">B2B2C identity linking</div>
              
              <div className="border-b border-r border-gold/30 p-4">Manual intent guessing</div>
              <div className="border-b border-gold/30 p-4 text-gold">Real-time search tracking for "n8n integration" / "AI cost savings"</div>
              
              <div className="border-r border-gold/30 p-4">Spray-and-pray outreach</div>
              <div className="border-gold/30 p-4 text-gold">SIC-coded decision makers actively Googling solutions</div>
            </div>
          </div>
          
          <p className="terminal-text text-xl text-center mt-16">
            "Last Thursday, 7 agencies closed $297k in combined contracts from leads we delivered 14 days prior."
          </p>
        </div>
      </section>

      {/* Section 3: The Elixir (Solution Revelation) */}
      <section className="container mx-auto px-4 section-spacing">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-16">
          Your New Reality as a Partner Agency
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="border border-gold/30 p-8">
            <h3 className="terminal-text text-2xl mb-4">Precision Nuclear Targeting</h3>
            <p className="terminal-text">
              "We track prospects who searched for exact solutions you offer 3.2x before contacting you."
            </p>
          </div>

          <div className="border border-gold/30 p-8">
            <h3 className="terminal-text text-2xl mb-4">CRM Autoload System</h3>
            <p className="terminal-text">
              "Hot leads auto-populate in your HubSpot/Salesforce before they finish reading your competitor's outdated blog."
            </p>
          </div>

          <div className="border border-gold/30 p-8">
            <h3 className="terminal-text text-2xl mb-4">Ghost Competition Protocol</h3>
            <p className="terminal-text">
              "We never sell similar niches—your territory remains yours alone."
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 border border-gold/30">
          <h3 className="terminal-text text-xl mb-4 text-center">Case Study Teaser</h3>
          <p className="terminal-text text-center">
            "How a 2-person team scaled to $83k/mo in 11 weeks using our real-time intent alerts"
            <br /><span className="text-sm mt-2 block">(Application required to view full case study)</span>
          </p>
        </div>
      </section>

      {/* Section 4: The Gauntlet (Exclusive Access) */}
      <section className="container mx-auto px-4 section-spacing bg-dark-100">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-16">
          Why We Reject 68% of Applicants
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="p-8 border border-gold/30">
            <h3 className="terminal-text text-2xl mb-4">Margin Validation</h3>
            <p className="terminal-text">
              "Can you handle 20+ new clients/month without fulfillment collapse?"
            </p>
          </div>

          <div className="p-8 border border-gold/30">
            <h3 className="terminal-text text-2xl mb-4">Offer Stress Test</h3>
            <p className="terminal-text">
              "Is your pitch engineered to convert decision-makers who already know they need AI?"
            </p>
          </div>

          <div className="p-8 border border-gold/30">
            <h3 className="terminal-text text-2xl mb-4">Scalability DNA</h3>
            <p className="terminal-text">
              "Do you have systems (not just hunger) to 10X if leads convert at 22%+?"
            </p>
          </div>
        </div>

        <p className="terminal-text text-xl text-center mt-16 max-w-4xl mx-auto">
          "This isn't for hobbyists. If you're serious about domination, prove it below."
        </p>
      </section>

      {/* Section 5: The Threshold (CTA) */}
      <section className="container mx-auto px-4 section-spacing">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-12">
          Your Next 45 Days Will Determine the Next 45 Years
        </h2>

        <ApplicationForm />
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gold/20 mt-16">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="text-center text-gold/40 mt-4 text-sm terminal-text">
          © {new Date().getFullYear()} KIXIK TECHNOLOGIES. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
