
import React from 'react';
import TestimonialCard, { TestimonialData } from './TestimonialCard';
import { Star } from 'lucide-react';

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
  },
  {
    name: "Nolan Reece",
    title: "Agency Owner in the Automotive Lead Niche",
    message: "I used to think I had a traffic problem, but it turns out I had a targeting problem. The leads I was chasing before were ice cold. It was like trying to sell windshield wipers in the desert. But the moment I started speaking to people who had actually been researching solutions, everything clicked. Sales calls got smoother. My closing rate tripled. And I stopped waking up every morning wondering where the next client would come from.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
  },
  {
    name: "Alina Kerr",
    title: "Agency Owner in the Influencer Management Niche",
    message: "What blew me away was how effortless it felt. I didn't rewrite my sales script. I didn't rebrand. I just changed who I was talking to. Suddenly, I was having conversations with people who were already trying to solve the exact problems I specialize in. That shift gave me instant momentum. More replies. More calls. More deals. It made me realize the hard part wasn't my offer—it was the direction of my attention.",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop"
  },
  {
    name: "Griffin Steele",
    title: "Agency Owner in the Podcasting and Content Niche",
    message: "I thought scaling would take a year. Turns out it only took the right people. Within two weeks of launching my new outbound campaigns, I booked nine discovery calls and closed five. These weren't maybe-someday leads. These were business owners who were actively trying to find help. I finally stopped feeling like a spammer and started feeling like a solution. The confidence boost alone has been game-changing.",
    imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop"
  },
  {
    name: "Bella Quinn",
    title: "Agency Owner in the Childcare Automation Niche",
    message: "The difference was immediate. I'd spent months burning money on ads and scraping together inconsistent lists. I was exhausted. But once I started speaking to the right segment—people already deep in the buying mindset—it felt like I'd entered a different business. Conversations were warmer. Sales cycles shortened. Revenue became steady. For the first time, I feel like my agency has structure and certainty.",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b398ccff?w=500&h=500&fit=crop"
  },
  {
    name: "Marcus Lin",
    title: "Agency Owner in the IT Services Niche",
    message: "We were doing okay, but growth was slow and stressful. My team was constantly shifting gears trying to keep the pipeline full. But everything turned around once we made one change—who we were targeting. Our list suddenly became a goldmine. People were replying the same day. Calls got booked without friction. We've added more clients in the last month than the previous quarter, and I finally feel like we're in a position to scale without chaos.",
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&h=500&fit=crop"
  },
  {
    name: "Elise Navarro",
    title: "Agency Owner in the Home Improvement Niche",
    message: "What used to feel like a hustle now feels like momentum. I was sending hundreds of cold emails a week just to get one or two lukewarm responses. I started using better signals to figure out who actually cared, and the whole game changed. My emails started turning into booked calls. My calendar filled up. My pipeline stayed warm. And I started thinking bigger because the leads finally matched the vision I had for this business.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
  },
  {
    name: "Colton Reyes",
    title: "Agency Owner in the B2B Sales Enablement Niche",
    message: "It felt like I unlocked a secret backdoor to demand. I wasn't doing anything fancy. I just started focusing on people who were already searching, clicking, comparing. Once I aligned my outreach with that behavior, everything sped up. I stopped explaining what I do on calls and started exploring how fast we could implement. That shift changed my entire business model. I'm now forecasting revenue with confidence, not hope.",
    imageUrl: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&h=500&fit=crop"
  },
  {
    name: "Aaliyah Dunn",
    title: "Agency Owner in the Virtual Assistant Systems Niche",
    message: "I always believed in high-ticket retainers but struggled to build the trust quickly enough to justify them. That changed overnight once I began speaking to people who had already hit the breaking point. They weren't just curious. They were ready. And when that's the case, positioning becomes effortless. The value of what I offer landed harder. My close rate went through the roof. And now, for the first time, I've got a real waitlist.",
    imageUrl: "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?w=500&h=500&fit=crop"
  },
  {
    name: "Theo Bradford",
    title: "Agency Owner in the Landscaping Tech Niche",
    message: "The best part is the peace of mind. I'm no longer living in that anxious space of \"will this work?\" I know when I turn on a new campaign, qualified people will respond. I've built systems around that reliability. I've hired based on that flow. It's the kind of growth I used to think was only available to agencies with big teams and ad budgets. Turns out, I just needed the right access.",
    imageUrl: "https://images.unsplash.com/photo-1618088129969-bcb0c051985e?w=500&h=500&fit=crop"
  },
  {
    name: "Jade Emerson",
    title: "Agency Owner in the Fashion Brand Automation Niche",
    message: "I remember reading about agency owners who had consistent inbound, booked calls every day, and I used to think they were lying or lucky. Now I'm living it. Every day I wake up to interest, follow-ups, conversations already in motion. I didn't change who I was. I didn't reinvent my offer. I just started speaking to people who were already moving. That simple decision has turned my agency into something I can truly scale—and enjoy.",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-36 md:py-48">
      {/* Stars above the heading */}
      <div className="flex justify-center items-center gap-4 mb-8">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={`top-star-${index}`}
            className="h-6 w-6 fill-gold text-gold" 
          />
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-6 mb-8">
        {/* Left Wreath */}
        <img 
          src="/lovable-uploads/29f6f10c-d837-49b6-9b65-6345c06a444e.png" 
          alt="Decorative left wreath" 
          className="h-16 w-16 transform rotate-[30deg]"
        />
        
        <h2 className="text-3xl md:text-4xl terminal-text gold-glow text-center">
          Case Studies & Testimonials
        </h2>
        
        {/* Right Wreath */}
        <img 
          src="/lovable-uploads/29f6f10c-d837-49b6-9b65-6345c06a444e.png" 
          alt="Decorative right wreath" 
          className="h-16 w-16 transform rotate-[-30deg] scale-x-[-1]"
        />
      </div>
      
      {/* Stars below the heading */}
      <div className="flex justify-center items-center gap-4 mb-16">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={`bottom-star-${index}`}
            className="h-6 w-6 fill-gold text-gold" 
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
