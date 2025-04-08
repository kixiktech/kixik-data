
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import CalButton from './CalButton';

const ApplicationForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received. Our team will review your submission.");
  };

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-gold terminal-text">
            Full Name
          </label>
          <Input 
            type="text" 
            placeholder="Your full name"
            className="bg-dark-200 border-gold/30 text-gold terminal-text"
            value={formState.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </div>

        <div className="space-y-3">
          <label className="block text-gold terminal-text">
            Email Address
          </label>
          <Input 
            type="email" 
            placeholder="your@email.com"
            className="bg-dark-200 border-gold/30 text-gold terminal-text"
            value={formState.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-gold terminal-text">
            Phone Number
          </label>
          <Input 
            type="tel" 
            placeholder="Your phone number"
            className="bg-dark-200 border-gold/30 text-gold terminal-text"
            value={formState.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-gold terminal-text">
            Company Name
          </label>
          <Input 
            type="text" 
            placeholder="Your company name"
            className="bg-dark-200 border-gold/30 text-gold terminal-text"
            value={formState.company}
            onChange={(e) => handleChange('company', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-gold terminal-text">
          Annual Revenue
        </label>
        <Select 
          onValueChange={(value) => handleChange('revenue', value)}
          value={formState.revenue}
        >
          <SelectTrigger className="bg-dark-200 border-gold/30 text-gold terminal-text">
            <SelectValue placeholder="Select revenue range" />
          </SelectTrigger>
          <SelectContent className="bg-dark-200 border-gold/30 text-gold terminal-text">
            <SelectItem value="under_100k">Under $100K</SelectItem>
            <SelectItem value="100k_500k">$100K - $500K</SelectItem>
            <SelectItem value="500k_1m">$500K - $1M</SelectItem>
            <SelectItem value="1m_5m">$1M - $5M</SelectItem>
            <SelectItem value="over_5m">Over $5M</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <label className="block text-gold terminal-text">
          Your Message
        </label>
        <Textarea 
          placeholder="Tell us about your business and goals" 
          className="bg-dark-200 border-gold/30 text-gold terminal-text h-32"
          value={formState.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
      </div>

      <CalButton 
        type="submit" 
        className="w-full"
      >
        Schedule a Strategy Session →
      </CalButton>
    </form>
  );
};

export default ApplicationForm;
