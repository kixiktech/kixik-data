
import React from 'react';
import Logo from '@/components/Logo';
import GrainOverlay from '@/components/GrainOverlay';
import CornerLogo from '@/components/CornerLogo';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Unlocking Elite-Level Data: The Secret Behind Market Leaders',
    excerpt: 'Discover how top companies are leveraging high-intent data to outperform competitors and scale faster than ever before.',
    date: 'May 1, 2025',
    author: 'Alex Reynolds',
    imageUrl: '/lovable-uploads/5b856b5c-252d-4377-bc63-a542828574ec.png',
  },
  {
    id: 2,
    title: 'The Data Advantage: Finding Signal in Noise',
    excerpt: 'Learn how our algorithmic engine processes over 200 billion URLs weekly to identify genuine buying signals.',
    date: 'April 24, 2025',
    author: 'Sarah Chen',
    imageUrl: '/lovable-uploads/290d09a1-1a2c-4c1b-b77e-4ee036c29c5e.png',
  },
  {
    id: 3,
    title: 'Why Traditional Lead Generation Is Failing Your Business',
    excerpt: 'The landscape has changed. Find out why conventional lead strategies no longer deliver the results they once promised.',
    date: 'April 15, 2025',
    author: 'Marcus Johnson',
    imageUrl: '/lovable-uploads/c70d4628-b80c-4049-9af1-d45a69f7f374.png',
  }
];

const Blog = () => {
  return (
    <>
      <GrainOverlay />
      <div className="min-h-screen bg-black text-gold">
        <header className="container mx-auto py-8 px-6 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gold hover:text-gold-light transition-colors terminal-text">
              Home
            </Link>
            <Link to="/blog" className="text-gold hover:text-gold-light transition-colors terminal-text font-bold border-b border-gold">
              Blog
            </Link>
          </nav>
          <CornerLogo />
        </header>

        <section className="container mx-auto px-6 mt-16 md:mt-24 mb-16 max-w-5xl">
          <h1 className="text-3xl md:text-5xl terminal-text gold-glow mb-8 text-center">KIXIK INSIGHTS</h1>
          <p className="text-xl md:text-2xl terminal-text text-gold/80 mb-16 text-center max-w-3xl mx-auto">
            Strategic data intelligence for market leaders. Unlock the hidden patterns that drive business growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-dark-100/50 border border-gold/10 backdrop-blur-sm hover:border-gold/30 transition-colors">
                <CardHeader className="p-0">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-gold/60 space-x-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm terminal-text">{post.date}</span>
                  </div>
                  <CardTitle className="terminal-text text-xl mb-4 text-gold">
                    {post.title}
                  </CardTitle>
                  <p className="terminal-text leading-relaxed text-gold/80 mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-sm text-gold/70 mb-4">By {post.author}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="text-gold border-gold/30 hover:bg-gold/10 hover:text-gold-light w-full terminal-text">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="terminal-text" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="terminal-text">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="terminal-text">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="terminal-text">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="terminal-text" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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
    </>
  );
};

export default Blog;
