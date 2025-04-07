
import React from 'react';
import TestimonialCard, { TestimonialData } from './TestimonialCard';

const testimonials: TestimonialData[] = [
  {
    name: "Chase Devlin",
    title: "Agency Owner in the Lead Gen Automation Niche",
    message: "Once I realized I didn't need to build a better funnel, just a better input, everything shifted. The right people started responding, and it felt like I was finally moving with the current instead of fighting it. Calls booked themselves. Clients came in faster than I could onboard. I didn't get smarter. I didn't work harder. I just finally got in front of the people who were already looking.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen11c14c9d30182757fc54ca9f71629d27.jpg"
  },
  {
    name: "Zoe Michaels",
    title: "Agency Owner in the Coaching and Consulting Niche",
    message: "I've been through the whole cycle. Community templates. Scraped lists. Outreach tools that promise the world. None of it moved the needle until I changed the kind of conversations I was having. The leads I'm working with now feel like they've already made the decision. I just need to show up and help them take the next step. The clarity and simplicity that comes from that is something I never thought I'd experience.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen115e2f0a02d7be14a25c9e7a8e4c342b.jpg"
  },
  {
    name: "Jalen Wu",
    title: "Agency Owner in the Medical Billing Niche",
    message: "There's something surreal about seeing replies come in from people who actually want to talk. For so long, I assumed low conversion was just part of the game. But it turns out I was just talking to the wrong people. When I started targeting business owners who were already in motion, everything became easier. Outreach became conversations. Conversations became clients. And the growth just keeps compounding.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen11634aafb975fc2629362ec78ac7c93e.jpg"
  },
  {
    name: "Amira Bell",
    title: "Agency Owner in the Restaurant Ops Niche",
    message: "I used to start every week wondering where the next client was coming from. That kind of anxiety kills creativity. But once I had access to higher quality leads, things changed fast. The quality of conversations, the speed of the sales cycle, the level of trust—it all improved. Now I know exactly what to expect. I have a pipeline that's consistent. I'm building with confidence instead of crossing my fingers.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen1195a32d9a9c2eaeed2c3681b339a0ef.jpg"
  },
  {
    name: "Xavier Lane",
    title: "Agency Owner in the Local SEO Automation Niche",
    message: "When I tell people I closed five new clients in two weeks, they assume I must've hired a closer or dropped money on ads. But the truth is much simpler. I started talking to people who were already looking. That one decision created a ripple effect in my business. More confidence. More energy. More clarity. It's hard to explain what that feels like until you experience it, but once you do, you don't go back.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen119fbae699285fa91706995721d4fc65.jpg"
  },
  {
    name: "Kayla Simmons",
    title: "Agency Owner in the Wellness and Nutrition Niche",
    message: "I didn't realize how much time I was spending convincing people to care until I started speaking to those who already did. Every sales call now feels more like a collaboration than a pitch. I'm not twisting arms. I'm guiding people toward decisions they're already leaning into. It's more enjoyable, more effective, and far more scalable. I finally feel like I'm working on the right things.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen11c3de9db4c4b44b565fc8be92185d8e.jpg"
  },
  {
    name: "Darius Webb",
    title: "Agency Owner in the Roofing Automation Niche",
    message: "The feeling I had after closing my first two deals from one email campaign was unforgettable. It wasn't just the money. It was the realization that the game had changed. I finally understood that it's not about saying the perfect thing. It's about saying the right thing to the right person at the right time. When you get that alignment, everything else becomes easier.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen114da3fc606994f1ed5a8e771d11e8a3.jpg"
  },
  {
    name: "Bianca Nguyen",
    title: "Agency Owner in the Pet Services Niche",
    message: "I used to get excited about open rates. Now I get excited about closed deals. My business has become so much more fun now that I don't have to babysit every part of the pipeline. The people I'm talking to are already aware of the problems I solve. They're open. Curious. Willing to Listen. And that creates a completely different energy in my business.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen1147d9fa8d7c46d11e2c8c265a07983c.jpg"
  },
  {
    name: "Jared Foster",
    title: "Agency Owner in the Home Services Niche",
    message: "It's hard to put into words what it feels like when your sales process finally works the way you imagined. I was stuck in a loop of cold messages and no replies. Then I started tapping into intent-based outreach. Suddenly, my days were filled with back-and-forth conversations that led somewhere. I'm not forcing anything anymore. I'm just responding to demand that already exists.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen117037645993183d5bf3eb1e4db5d8cd.jpg"
  },
  {
    name: "Sienna Carter",
    title: "Agency Owner in the SaaS Enablement Niche",
    message: "I kept thinking I needed better scripts. Better angles. Better CTAs. But what I really needed was better timing. Once I started connecting with prospects who were already researching automation, I realized how much simpler this business could be. My results skyrocketed. My stress dropped. It's like I finally found the frequency that my offer was meant to operate on.",
    imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen11a97e4fffce0cded101660e1d4f1a47.jpg"
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
