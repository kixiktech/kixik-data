
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
      <header className="container mx-auto py-6 px-6 flex justify-between items-center backdrop-blur-sm bg-black/50 sticky top-0 z-50 border-b border-gold/10">
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

      {/* Hero Section - Improved spacing and visual hierarchy */}
      <section className="container mx-auto px-6 pt-20 pb-16 text-center max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <GoldLogo />
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl terminal-text gold-glow leading-tight">
              Data Superpowers<br />
              <span className="text-gold/80">Without the Complexity</span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl lg:text-3xl terminal-text text-gold/90 leading-relaxed">
                Kixik is your personal AI data agent.
              </p>
              <p className="text-lg md:text-xl terminal-text text-gold/70 leading-relaxed">
                It scans the world's information — from satellite imagery to social signals — and delivers clear, actionable answers.<br />
                <span className="text-gold/60">No software to learn. No guesswork. Just results.</span>
              </p>
            </div>
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <CalButton className="text-lg md:text-xl px-8 py-4 shadow-lg shadow-gold/20">
                  Join the Waitlist
                </CalButton>
                <CalButton className="text-lg md:text-xl px-8 py-4 bg-transparent border-2 border-gold/40 hover:bg-gold/10 shadow-lg shadow-gold/10">
                  Request Early Access
                </CalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Metrics Visual Section - Better integration */}
      <section className="py-12 md:py-20">
        <DataMetricsVisual />
      </section>

      {/* Chapter One: The Problem - Improved readability */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl terminal-text text-white mb-8 leading-tight">
            You Were Never Supposed to<br />
            <span className="gold-glow">Have This Power</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="w-full max-w-[600px] mx-auto lg:mx-0">
            <img src="/lovable-uploads/5b856b5c-252d-4377-bc63-a542828574ec.png" alt="3D gold wave pattern visualization" className="w-full h-auto rounded-xl shadow-2xl shadow-gold/10" />
          </div>

          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                Data is everywhere, but it was never built for you.<br />
                It's scattered across systems. Hidden behind logins. Guarded by complexity.
              </p>
              <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                Big companies spent years and millions making sense of it all.<br />
                You were left with spreadsheets.<br />
                And instincts.<br />
                And blind spots.
              </p>
            </div>
            
            <Separator className="bg-gold/20 my-8" />
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                You're not alone. Most people are drowning in disconnected data.<br />
                Every answer feels just out of reach.<br />
                And every tool promises clarity but delivers more confusion.
              </p>
              
              <p className="text-2xl md:text-3xl terminal-text gold-glow italic font-bold">
                That ends now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Two: The Shift - Card-based layout */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-dark-100 to-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl terminal-text gold-glow mb-8 leading-tight">
              Kixik Connects the Dots<br />
              <span className="text-gold/80">Before You Even Ask</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-dark-200/60 border border-gold/20 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl terminal-text gold-glow mb-4">You Need Outcomes</h3>
              <p className="text-gold/80 terminal-text leading-relaxed">
                You don't need another dashboard.<br />
                You need outcomes.<br />
                Kixik listens to your goal — then builds a plan.
              </p>
            </div>
            
            <div className="bg-dark-200/60 border border-gold/20 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl terminal-text gold-glow mb-4">Data From Anywhere</h3>
              <p className="text-gold/80 terminal-text leading-relaxed">
                It pulls in the right data.<br />
                From anywhere.<br />
                Satellite imagery. Property records. Social media. Public databases. Live marketplaces.
              </p>
            </div>
            
            <div className="bg-dark-200/60 border border-gold/20 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl terminal-text gold-glow mb-4">Clear Results</h3>
              <p className="text-gold/80 terminal-text leading-relaxed">
                Then it interprets what it finds.<br />
                Not just numbers. Not just charts.<br />
                Decisions. Actions. Movement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl terminal-text gold-glow mb-6">
              All delivered to you in natural language.
            </p>
            <p className="text-lg terminal-text text-gold/80">
              One conversation. One clear result.
            </p>
          </div>

          <div className="mt-16">
            <ComparisonTables />
          </div>
        </div>
      </section>

      {/* Chapter Three: Real Power - Story-driven layout */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl terminal-text gold-glow mb-8 leading-tight">
            This Is What<br />
            <span className="text-white">Intelligence Looks Like</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="w-full max-w-[300px] mx-auto lg:mx-0">
            <img alt="Golden lighthouse illuminating binary data" src="/lovable-uploads/c70d4628-b80c-4049-9af1-d45a69f7f374.png" className="w-full h-auto opacity-90 drop-shadow-2xl" />
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-r from-dark-200/80 to-dark-100/50 border border-gold/20 rounded-xl p-8 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="text-xl terminal-text gold-glow">The Contractor's Edge</h3>
              </div>
              <p className="text-lg terminal-text text-gold/80 leading-relaxed">
                Say you're a contractor. A storm just rolled through your city.<br />
                You ask Kixik to find homes with visible roof damage.<br />
                It analyzes satellite images, confirms damage, finds the property owners, and hands you a ranked list with contact info.<br />
                <span className="text-gold font-bold">You move before your competitors even load their CRM.</span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-dark-200/80 to-dark-100/50 border border-gold/20 rounded-xl p-8 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="text-xl terminal-text gold-glow">The Parts Hunter</h3>
              </div>
              <p className="text-lg terminal-text text-gold/80 leading-relaxed">
                Or maybe you're trying to source a rare part for an older vehicle.<br />
                You ask Kixik for it.<br />
                It scrapes listings across eBay, Craigslist, Facebook, salvage yards, and more.<br />
                <span className="text-gold font-bold">Then it shows you where to buy — and who to call.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-2 border-gold/30 rounded-xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl terminal-text text-gold mb-4">
            This isn't a search engine.
          </p>
          <p className="text-xl md:text-2xl terminal-text gold-glow mb-4">
            This is intelligence.
          </p>
          <p className="text-lg terminal-text text-gold/80">
            The kind that used to require a full team.<br />
            Now it's in your pocket.
          </p>
        </div>

        <div className="flex justify-center mt-16">
          <CalButton className="text-lg md:text-xl px-10 py-4 shadow-lg shadow-gold/20">
            Get Early Access →
          </CalButton>
        </div>
      </section>

      {/* Chapter Four: Who It's For - Visual storytelling */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-dark-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full max-w-[600px] mx-auto lg:mx-0">
              <img src="/lovable-uploads/290d09a1-1a2c-4c1b-b77e-4ee036c29c5e.png" alt="Radar tracking interface showing US map" className="w-full h-auto opacity-90 rounded-xl shadow-2xl shadow-gold/10" />
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl terminal-text gold-glow leading-tight">
                If You Make Decisions,<br />
                <span className="text-white">Kixik Is Built for You</span>
              </h2>

              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                    You might be a small business owner with big questions.<br />
                    A freelancer trying to find the edge.<br />
                    An ops lead who sees the gaps before others do.<br />
                    Or just a curious mind who knows there's more beneath the surface.
                  </p>
                </div>
                
                <Separator className="bg-gold/20" />
                
                <div className="space-y-6">
                  <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                    Kixik works because you don't need to know what tools to use.<br />
                    You don't need a data science degree.<br />
                    You just need to know what you want.
                  </p>
                  
                  <p className="text-xl md:text-2xl terminal-text gold-glow font-bold">
                    And it will figure out the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <CalButton className="text-lg md:text-xl px-10 py-4 shadow-lg shadow-gold/20">
              Apply for Early Access
            </CalButton>
          </div>
        </div>
      </section>

      {/* Chapter Five: Why Now - Timeline feel */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-dark-100 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl terminal-text gold-glow mb-8 leading-tight">
              This Is the Product That<br />
              <span className="text-white">Should Have Existed Years Ago</span>
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-dark-200/40 border-l-4 border-gold/60 pl-8 py-6">
                <h3 className="text-xl terminal-text gold-glow mb-4">The Old Way</h3>
                <p className="text-lg terminal-text text-gold/80 leading-relaxed">
                  For too long, advanced intelligence was locked inside giant institutions.<br />
                  Hidden in defense budgets.<br />
                  Controlled by tech monopolies.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-8">
                <h3 className="text-xl terminal-text gold-glow mb-4">The New Reality</h3>
                <p className="text-lg terminal-text text-gold/80 leading-relaxed">
                  We built Kixik because we knew that didn't have to be true anymore.<br />
                  With modern AI, the world's data can finally be accessible.<br />
                  Not just to billion-dollar companies.<br />
                  But to anyone with a question.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-dark-200/60 to-dark-100/40 border border-gold/20 rounded-xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed">
                  You shouldn't need a team of engineers to know what's happening in your city.<br />
                  You shouldn't need a lab to make smart, fast decisions.<br />
                  And you shouldn't wait weeks for a report you can get in minutes.
                </p>
                
                <p className="text-xl md:text-2xl terminal-text gold-glow font-bold">
                  This is not the future.<br />
                  This is now.<br />
                  And you're invited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Chapter: The Invitation - Application focus */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl terminal-text gold-glow mb-8 leading-tight">
            You're One Question Away From<br />
            <span className="text-white">Knowing More Than You Ever Could Before</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 text-center mb-16">
          <div className="bg-gradient-to-r from-gold/5 to-transparent border border-gold/20 rounded-xl p-8 md:p-12">
            <p className="text-lg md:text-xl terminal-text text-gold/80 leading-relaxed mb-6">
              We are rolling out early access to a select group of people who want to see what this kind of intelligence can do.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold text-xl">?</span>
                </div>
                <p className="terminal-text text-gold/80">People who ask better questions.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold text-xl">⚡</span>
                </div>
                <p className="terminal-text text-gold/80">People who want to move faster.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold text-xl">📊</span>
                </div>
                <p className="terminal-text text-gold/80">People who know that when the right data shows up at the right time, everything changes.</p>
              </div>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl terminal-text gold-glow font-bold">
            Join them.
          </p>
        </div>

        <ApplicationForm />
        
        <div className="text-center mt-16 space-y-6">
          <p className="text-lg md:text-xl terminal-text text-gold/80 italic">
            This isn't just a tool. It's the clarity you've been waiting for.
          </p>
          <Separator className="bg-gold/20 max-w-md mx-auto" />
          <p className="text-base terminal-text text-gold/60">
            We're not pitching software. We're telling a story of power, once hoarded, now handed to the people.
          </p>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-16 border-t border-gold/20 mt-16 bg-dark-100/50">
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
