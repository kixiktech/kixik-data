
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import CalButton from './CalButton';

const ApplicationForm = () => {
  const [formState, setFormState] = useState({
    bottleneck: '',
    contactsClosed: '',
    whyRisk: ''
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
      <div className="space-y-3">
        <label className="block text-gold terminal-text text-xl">
          What's the #1 bottleneck keeping you from tripling agency revenue?
        </label>
        <Select 
          onValueChange={(value) => handleChange('bottleneck', value)}
          value={formState.bottleneck}
        >
          <SelectTrigger className="bg-dark-200 border-gold/30 text-gold terminal-text">
            <SelectValue placeholder="Select a bottleneck" />
          </SelectTrigger>
          <SelectContent className="bg-dark-200 border-gold/30 text-gold terminal-text">
            <SelectItem value="lead_quality">Lead quality</SelectItem>
            <SelectItem value="outreach_capacity">Outreach capacity</SelectItem>
            <SelectItem value="offer_conversion">Offer conversion</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <label className="block text-gold terminal-text text-xl">
          How many CEO/CTO-level contacts have you closed in Q1?
        </label>
        <Input 
          type="text" 
          placeholder="Enter number"
          className="bg-dark-200 border-gold/30 text-gold terminal-text"
          value={formState.contactsClosed}
          onChange={(e) => handleChange('contactsClosed', e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <label className="block text-gold terminal-text text-xl">
          Why should we risk our reputation on your agency?
        </label>
        <Textarea 
          placeholder="Convince us" 
          className="bg-dark-200 border-gold/30 text-gold terminal-text h-32"
          value={formState.whyRisk}
          onChange={(e) => handleChange('whyRisk', e.target.value)}
        />
      </div>

      <CalButton 
        type="submit" 
        className="w-full"
      >
        Submit for Vetting →
      </CalButton>
    </form>
  );
};

export default ApplicationForm;
