
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import CalButton from './CalButton';

const ApplicationForm = () => {
  const [formState, setFormState] = useState({
    clientLTV: '',
    currentAcquisition: '',
    timeframe: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received. We'll be in touch soon.");
  };

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mt-8 space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl terminal-text gold-glow mb-4">
          Get Early Access
        </h3>
        <p className="text-gold/80 terminal-text">
          Tell us about your data challenges. We'll show you what's possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <label className="block text-gold terminal-text">
            What kind of decisions do you make regularly?
          </label>
          <Input 
            taller
            type="text" 
            placeholder="e.g. Finding leads, sourcing materials, market research..."
            className="bg-dark-200 border-gold/30 text-gold terminal-text"
            value={formState.clientLTV}
            onChange={(e) => handleChange('clientLTV', e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-gold terminal-text">
            What data do you currently use to make those decisions?
          </label>
          <Textarea 
            placeholder="Spreadsheets, Google searches, industry reports, etc."
            className="bg-dark-200 border-gold/30 text-gold terminal-text h-24"
            value={formState.currentAcquisition}
            onChange={(e) => handleChange('currentAcquisition', e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-gold terminal-text">
            How quickly do you need better insights?
          </label>
          <Select 
            onValueChange={(value) => handleChange('timeframe', value)}
            value={formState.timeframe}
            required
          >
            <SelectTrigger className="bg-dark-200 border-gold/30 text-gold terminal-text">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent className="bg-dark-200 border-gold/30 text-gold terminal-text">
              <SelectItem value="immediately">I need this now</SelectItem>
              <SelectItem value="two_weeks">Within the next few weeks</SelectItem>
              <SelectItem value="exploring">Just exploring possibilities</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CalButton 
          type="submit" 
          className="w-full mt-8"
        >
          GET EARLY ACCESS
        </CalButton>
        
        <p className="text-center text-gold/70 terminal-text text-sm mt-4">
          We review every application personally. If you're a fit, we'll reach out within 24 hours.
        </p>
      </form>
    </div>
  );
};

export default ApplicationForm;
