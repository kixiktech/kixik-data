
import React from 'react';
import TestimonialCard, { TestimonialData } from './TestimonialCard';

const testimonials: TestimonialData[] = [
  {
    name: "Chase Devlin",
    title: "Agency Owner in the Lead Gen Automation Niche",
    message: "Once I realized I didn't need to build a better funnel, just a better input, everything shifted. The right people started responding, and it felt like I was finally moving with the current instead of fighting it. Calls booked themselves. Clients came in faster than I could onboard. I didn't get smarter. I didn't work harder. I just finally got in front of the people who were already looking.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop"
  },
  {
    name: "Zoe Michaels",
    title: "Agency Owner in the Coaching and Consulting Niche",
    message: "I've been through the whole cycle. Community templates. Scraped lists. Outreach tools that promise the world. None of it moved the needle until I changed the kind of conversations I was having. The leads I'm working with now feel like they've already made the decision. I just need to show up and help them take the next step. The clarity and simplicity that comes from that is something I never thought I'd experience.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
  },
  {
    name: "Jalen Wu",
    title: "Agency Owner in the Medical Billing Niche",
    message: "There's something surreal about seeing replies come in from people who actually want to talk. For so long, I assumed low conversion was just part of the game. But it turns out I was just talking to the wrong people. When I started targeting business owners who were already in motion, everything became easier. Outreach became conversations. Conversations became clients. And the growth just keeps compounding.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
  },
  {
    name: "Amira Bell",
    title: "Agency Owner in the Restaurant Ops Niche",
    message: "I used to start every week wondering where the next client was coming from. That kind of anxiety kills creativity. But once I had access to higher quality leads, things changed fast. The quality of conversations, the speed of the sales cycle, the level of trust—it all improved. Now I know exactly what to expect. I have a pipeline that's consistent. I'm building with confidence instead of crossing my fingers.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop"
  },
  {
    name: "Xavier Lane",
    title: "Agency Owner in the Local SEO Automation Niche",
    message: "When I tell people I closed five new clients in two weeks, they assume I must've hired a closer or dropped money on ads. But the truth is much simpler. I started talking to people who were already looking. That one decision created a ripple effect in my business. More confidence. More energy. More clarity. It's hard to explain what that feels like until you experience it, but once you do, you don't go back.",
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&h=500&fit=crop"
  },
  {
    name: "Kayla Simmons",
    title: "Agency Owner in the Wellness and Nutrition Niche",
    message: "I didn't realize how much time I was spending convincing people to care until I started speaking to those who already did. Every sales call now feels more like a collaboration than a pitch. I'm not twisting arms. I'm guiding people toward decisions they're already leaning into. It's more enjoyable, more effective, and far more scalable. I finally feel like I'm working on the right things.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"
  },
  {
    name: "Darius Webb",
    title: "Agency Owner in the Roofing Automation Niche",
    message: "The feeling I had after closing my first two deals from one email campaign was unforgettable. It wasn't just the money. It was the realization that the game had changed. I finally understood that it's not about saying the perfect thing. It's about saying the right thing to the right person at the right time. When you get that alignment, everything else becomes easier.",
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&h=500&fit=crop"
  },
  {
    name: "Bianca Nguyen",
    title: "Agency Owner in the Pet Services Niche",
    message: "I used to get excited about open rates. Now I get excited about closed deals. My business has become so much more fun now that I don't have to babysit every part of the pipeline. The people I'm talking to are already aware of the problems I solve. They're open. Curious. Willing to Listen. And that creates a completely different energy in my business.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop"
  },
  {
    name: "Jared Foster",
    title: "Agency Owner in the Home Services Niche",
    message: "It's hard to put into words what it feels like when your sales process finally works the way you imagined. I was stuck in a loop of cold messages and no replies. Then I started tapping into intent-based outreach. Suddenly, my days were filled with back-and-forth conversations that led somewhere. I'm not forcing anything anymore. I'm just responding to demand that already exists.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop"
  },
  {
    name: "Sienna Carter",
    title: "Agency Owner in the SaaS Enablement Niche",
    message: "I kept thinking I needed better scripts. Better angles. Better CTAs. But what I really needed was better timing. Once I started connecting with prospects who were already researching automation, I realized how much simpler this business could be. My results skyrocketed. My stress dropped. It's like I finally found the frequency that my offer was meant to operate on.",
    imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&h=500&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-36 md:py-48">
      <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
        Case Studies & Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
