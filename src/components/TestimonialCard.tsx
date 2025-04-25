
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export interface TestimonialData {
  name: string;
  title: string;
  message: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => {
  const { name, title, message, imageUrl } = data;
  const [imageError, setImageError] = useState(false);
  
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <Card className="p-6 md:p-8 bg-dark-200/60 border border-gold/30 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/20 relative">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16 border-2 border-gold/30">
          {!imageError ? (
            <AvatarImage 
              src={imageUrl} 
              alt={name} 
              onError={() => setImageError(true)}
              className="object-cover"
            />
          ) : null}
          <AvatarFallback className="bg-dark-100 text-gold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="terminal-text text-lg text-gold">{name}</h4>
          <p className="terminal-text text-sm text-gold/70">{title}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star}
            className="h-4 w-4 fill-gold text-gold mr-1" 
          />
        ))}
      </div>
      
      <div className="relative pb-12">
        <p className="terminal-text text-gold/80 leading-relaxed mb-4">
          {message}
        </p>
        <div className="absolute bottom-0 right-0">
          <img 
            src="/lovable-uploads/864a283b-dbfd-4b49-baa5-591169ae9142.png" 
            alt="Verified by Stripe" 
            className="h-8 opacity-80"
          />
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;

