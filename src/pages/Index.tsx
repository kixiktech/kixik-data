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
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gold hover:text-gold-light transition-colors terminal-text font-bold border-b border-gold">
            Home
          </Link>
          <Link to="/blog" className="text-gold hover:text-gold-light transition-colors terminal-text">
            Blog
          </Link>
        </nav>
        <CornerLogo />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mt-16 md:mt-32 text-center max-w-5xl">
        <GoldLogo />
        <h1 className="text-3xl md:text-5xl terminal-text gold-glow mb-12 px-[32px]">Data Superpowers Without the Complexity</h1>
        <p className="text-xl md:text-2xl terminal-text max-w-3xl mx-auto text-gold/80 mb-16">
          Kixik is your personal AI data agent.<br />
          It scans the world's information — from satellite imagery to social signals — and delivers clear, actionable answers.<br />
          No software to learn. No guesswork. Just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CalButton className="text-base md:text-lg">
            Join the Waitlist
          </CalButton>
          <CalButton className="text-base md:text-lg bg-transparent border border-gold/30 hover:bg-gold/10">
            Request Early Access
          </CalButton>
        </div>
      </section>

      {/* Data Metrics Visual Section */}
      <DataMetricsVisual />

      {/* Chapter One: The Problem */}
      <section className="container mx-auto px-6 md:py-48 max-w-6xl py-[92px]">
        <h2 className="text-3xl md:text-4xl terminal-text text-white text-center mb-20 px-[35px]">You Were Never Supposed to Have This Power</h2>
        
        <div className="w-full max-w-[800px] mx-auto mb-16">
          <img src="/lovable-uploads/5b856b5c-252d-4377-bc63-a542828574ec.png" alt="3D gold wave pattern visualization" className="w-full h-auto rounded-lg" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
            Data is everywhere, but it was never built for you.<br />
            It's scattered across systems. Hidden behind logins. Guarded by complexity.<br />
            Big companies spent years and millions making sense of it all.<br />
            You were left with spreadsheets.<br />
            And instincts.<br />
            And blind spots.
          </p>
          
          <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
            You're not alone. Most people are drowning in disconnected data.<br />
            Every answer feels just out of reach.<br />
            And every tool promises clarity but delivers more confusion.
          </p>
          
          <p className="text-xl md:text-2xl terminal-text gold-glow italic">
            That ends now.
          </p>
        </div>
      </section>

      {/* Chapter Two: The Shift */}
      <section className="container mx-auto px-6 py-36 md:py-48 bg-dark-100 max-w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
            Kixik Connects the Dots Before You Even Ask
          </h2>

          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              You don't need another dashboard.<br />
              You need outcomes.<br />
              Kixik listens to your goal — then builds a plan.
            </p>
            
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              It pulls in the right data.<br />
              From anywhere.<br />
              Satellite imagery. Property records. Social media. Public databases. Live marketplaces.
            </p>
            
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              Then it interprets what it finds.<br />
              Not just numbers. Not just charts.<br />
              Decisions. Actions. Movement.
            </p>
            
            <p className="text-xl md:text-2xl terminal-text gold-glow">
              All delivered to you in natural language.<br />
              One conversation. One clear result.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <ComparisonTables />
          </div>
        </div>
      </section>

      {/* Chapter Three: Real Power */}
      <section className="container mx-auto px-6 md:py-48 bg-black max-w-6xl py-[88px]">
        <div className="max-w-4xl mx-auto space-y-24">
          <h2 className="text-4xl md:text-5xl terminal-text gold-glow text-center leading-tight">This Is What Intelligence Looks Like</h2>

          <div className="w-full max-w-[250px] mx-auto mb-16">
            <img alt="Golden lighthouse illuminating binary data" src="/lovable-uploads/c70d4628-b80c-4049-9af1-d45a69f7f374.png" className="w-full h-auto opacity-80 object-fill" />
          </div>

          <div className="space-y-12">
            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
              <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                Say you're a contractor. A storm just rolled through your city.<br />
                You ask Kixik to find homes with visible roof damage.<br />
                It analyzes satellite images, confirms damage, finds the property owners, and hands you a ranked list with contact info.<br />
                You move before your competitors even load their CRM.
              </p>
            </div>

            <div className="bg-dark-100/50 border border-gold/10 p-8 backdrop-blur-sm hover:border-gold/30 transition-colors">
              <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                Or maybe you're trying to source a rare part for an older vehicle.<br />
                You ask Kixik for it.<br />
                It scrapes listings across eBay, Craigslist, Facebook, salvage yards, and more.<br />
                Then it shows you where to buy — and who to call.
              </p>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl md:text-2xl terminal-text text-gold">
                This isn't a search engine.<br />
                This is intelligence.<br />
                The kind that used to require a full team.<br />
                Now it's in your pocket.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <CalButton className="text-base md:text-lg mx-[28px]">
              Get Early Access →
            </CalButton>
          </div>
        </div>
      </section>

      {/* Chapter Four: Who It's For */}
      <section className="container mx-auto px-6 md:py-48 max-w-6xl py-[43px]">
        <div className="w-full max-w-[800px] mx-auto mb-16">
          <img src="/lovable-uploads/290d09a1-1a2c-4c1b-b77e-4ee036c29c5e.png" alt="Radar tracking interface showing US map" className="w-full h-auto opacity-80" />
        </div>

        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
          If You Make Decisions, Kixik Is Built for You
        </h2>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              You might be a small business owner with big questions.<br />
              A freelancer trying to find the edge.<br />
              An ops lead who sees the gaps before others do.<br />
              Or just a curious mind who knows there's more beneath the surface.
            </p>
            
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              Kixik works because you don't need to know what tools to use.<br />
              You don't need a data science degree.<br />
              You just need to know what you want.
            </p>
            
            <p className="text-xl md:text-2xl terminal-text gold-glow">
              And it will figure out the rest.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <CalButton className="text-base md:text-lg">
            Apply for Early Access
          </CalButton>
        </div>
      </section>

      {/* Chapter Five: Why Now */}
      <section className="container mx-auto px-6 py-36 md:py-48 bg-dark-100 max-w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
            This Is the Product That Should Have Existed Years Ago
          </h2>

          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              For too long, advanced intelligence was locked inside giant institutions.<br />
              Hidden in defense budgets.<br />
              Controlled by tech monopolies.
            </p>
            
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              We built Kixik because we knew that didn't have to be true anymore.<br />
              With modern AI, the world's data can finally be accessible.<br />
              Not just to billion-dollar companies.<br />
              But to anyone with a question.
            </p>
            
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
              You shouldn't need a team of engineers to know what's happening in your city.<br />
              You shouldn't need a lab to make smart, fast decisions.<br />
              And you shouldn't wait weeks for a report you can get in minutes.
            </p>
            
            <p className="text-xl md:text-2xl terminal-text gold-glow">
              This is not the future.<br />
              This is now.<br />
              And you're invited.
            </p>
          </div>
        </div>
      </section>

      {/* Final Chapter: The Invitation */}
      <section className="container mx-auto px-6 py-36 md:py-48 max-w-6xl">
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-20">
          You're One Question Away From Knowing More Than You Ever Could Before
        </h2>

        <div className="max-w-4xl mx-auto space-y-12 text-center mb-16">
          <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
            We are rolling out early access to a select group of people who want to see what this kind of intelligence can do.<br />
            People who ask better questions.<br />
            People who want to move faster.<br />
            People who know that when the right data shows up at the right time, everything changes.
          </p>
          
          <p className="text-xl md:text-2xl terminal-text gold-glow">
            Join them.
          </p>
        </div>

        <ApplicationForm />
        
        <div className="text-center mt-16">
          <p className="text-lg md:text-xl terminal-text text-gold/80 italic">
            This isn't just a tool. It's the clarity you've been waiting for.
          </p>
          <p className="text-base terminal-text text-gold/60 mt-8">
            We're not pitching software. We're telling a story of power, once hoarded, now handed to the people.
          </p>
        </div>
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
