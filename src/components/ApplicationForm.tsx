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
    window.open("https://kixikonboarding.fillout.com/t/aky41kbvN1us", "_blank");
  };
  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="mt-8 space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl terminal-text gold-glow mb-4">Apply for Access to Elite Data Intel</h2>
        <p className="text-gold/80 terminal-text">
          We keep things simple. Just answer a few quick questions below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <label className="block text-gold terminal-text">Q1 – What’s your company’s approximate annual revenue?</label>
          <Input taller type="text" placeholder="e.g. $12 million" className="bg-dark-200 border-gold/30 text-gold terminal-text" value={formState.clientLTV} onChange={e => handleChange('clientLTV', e.target.value)} required />
        </div>

        <div className="space-y-4">
          <label className="block text-gold terminal-text">Q2 – Which systems do you use for sales, inventory, and customer data?</label>
          <Textarea placeholder="e.g. Shopify, QuickBooks, Excel" className="bg-dark-200 border-gold/30 text-gold terminal-text h-24" value={formState.currentAcquisition} onChange={e => handleChange('currentAcquisition', e.target.value)} required />
        </div>

        <div className="space-y-4">
          <label className="block text-gold terminal-text">
            Q3 – How soon are you looking to grow your client base?
          </label>
          <Select onValueChange={value => handleChange('timeframe', value)} value={formState.timeframe} required>
            <SelectTrigger className="bg-dark-200 border-gold/30 text-gold terminal-text">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent className="bg-dark-200 border-gold/30 text-gold terminal-text">
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="two_weeks">Within the next 2 weeks</SelectItem>
              <SelectItem value="exploring">Just looking around</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CalButton type="submit" className="w-full mt-8">APPLY TO SCALE WITH ELITE DATA intelligence</CalButton>
        
        <p className="text-center text-gold/70 terminal-text text-sm mt-4">We review every application manually. If your business is a fit, we'll reach out.</p>
      </form>
    </div>;
};
export default ApplicationForm;