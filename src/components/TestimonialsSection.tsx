
import React from 'react';
import TestimonialCard, { TestimonialData } from './TestimonialCard';
import { ScrollArea } from './ui/scroll-area';

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
  },
  // New testimonials
  {
    name: "Caleb Winters",
    title: "Agency Owner in the Personal Finance Automation Niche",
    message: "The best part isn't just the results. It's how predictable it all feels now. I used to dread Mondays because it meant spinning the wheel again, trying to generate attention from people who didn't care. Now, I start my week with confidence. The people coming into my pipeline are already aligned with what I offer. It's like running an agency with the wind at your back. Everything just moves smoother.",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop"
  },
  {
    name: "Talia Brooks",
    title: "Agency Owner in the Online Education Niche",
    message: "I used to spend my days tweaking headlines and rewriting DMs, hoping something would click. I was doing everything the gurus said to do, but the needle wasn't moving. That changed the moment I got in front of people who were actually raising their hands. I didn't even change my message—I just changed who saw it. Within three weeks, I brought on more revenue than the previous two months combined. I finally feel like I'm in the right room.",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop"
  },
  {
    name: "Isaac Delgado",
    title: "Agency Owner in the Landscaping Automation Niche",
    message: "One of the first messages I sent got a reply that said, \"This is exactly what I've been trying to figure out.\" That moment stuck with me. I'd never had a lead talk like that before. And it wasn't a fluke. That same energy kept repeating. These are people who don't just tolerate outreach—they welcome it. Because it solves a problem that's already top of mind. When you start from that place, the rest of the process feels frictionless.",
    imageUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&h=500&fit=crop"
  },
  {
    name: "Norah Patel",
    title: "Agency Owner in the Therapy & Wellness Systems Niche",
    message: "I always believed in what I was selling. I just couldn't seem to find people who were ready to believe in it too. Now I'm working with prospects who already understand the value of what I do before I even speak to them. That single shift has made me fall back in love with my agency. It's less push, more pull. And the conversations are so much more rewarding.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
  },
  {
    name: "Damon Ellis",
    title: "Agency Owner in the HVAC Efficiency Niche",
    message: "If you would have told me three months ago that I'd be booked out and thinking about waitlisting, I would've laughed. But that's exactly where I am now. The volume of inbound conversations and the quality of people reaching out has completely flipped. I'm no longer stuck chasing random leads who don't get it. I'm spending my time with owners who are serious about moving forward. It feels like I finally cracked the code.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop"
  },
  {
    name: "Penelope Rhodes",
    title: "Agency Owner in the Author & Publishing Niche",
    message: "The first time someone replied to my email and said, \"I've been Googling this exact thing all week,\" I realized something big had shifted. It made me think differently about the way I approach outreach entirely. The days of generic targeting are over for me. Now I speak directly to people who are already searching. It feels less like marketing and more like matchmaking.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop"
  },
  {
    name: "Elias Morgan",
    title: "Agency Owner in the Business Funding Niche",
    message: "You know things are working when your sales team is smiling more than stressed. That's been the biggest change in our agency. Morale is high because we're finally closing consistently. The leads we're working with don't need warming up. They just need guidance. My team spends less time chasing and more time closing, which means we're scaling faster with less burnout.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
  },
  {
    name: "Camila Estrada",
    title: "Agency Owner in the Fitness & Nutrition Tech Niche",
    message: "I used to believe growth had to be chaotic. Like if you weren't constantly stressed, you weren't doing it right. But now that I'm operating with cleaner data and clearer signals, everything feels more stable. The leads are real. The pipeline is steady. And the business finally feels sustainable. It's not a rollercoaster anymore. It's a rhythm. And that's what I've always wanted.",
    imageUrl: "https://images.unsplash.com/photo-1496440737103-cd88c0c9e4c9?w=500&h=500&fit=crop"
  },
  {
    name: "Preston Yang",
    title: "Agency Owner in the Nonprofit Automation Niche",
    message: "I always thought the nonprofit space was tough to crack because budgets are tighter and timelines move slower. But I learned it wasn't the space—it was who I was targeting. Once I got in front of people already looking for efficiency solutions, the whole game changed. Now I'm landing clients who are excited to move forward and eager to implement. It's a complete shift in momentum.",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=500&fit=crop"
  },
  {
    name: "Kiara Boone",
    title: "Agency Owner in the Travel & Hospitality Niche",
    message: "For the first time in my agency journey, growth feels like something I can actually plan. I'm not guessing anymore. The people I'm talking to are already tuned in to what I do. They've felt the pain. They're ready to act. It's not a grind. It's a conversation. And the pace we're growing at now is faster than I thought was possible. But the best part? It feels effortless.",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&h=500&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-36 md:py-48">
      <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center mb-24">
        Case Studies & Testimonials
      </h2>
      
      <ScrollArea className="h-[800px] pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} data={testimonial} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TestimonialsSection;
