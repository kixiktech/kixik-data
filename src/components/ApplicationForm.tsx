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
    toast.success("Application received. Our team will review your submission.");
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
          <label className="block text-gold terminal-text">
            Q1 – What's one client worth to your agency? – Lifetime Value (LTV)
          </label>
          <Input taller type="text" placeholder="e.g. $4,000 x 6 months = LTV. (input average LTV)" className="bg-dark-200 border-gold/30 text-gold terminal-text" value={formState.clientLTV} onChange={e => handleChange('clientLTV', e.target.value)} required />
        </div>

        <div className="space-y-4">
          <label className="block text-gold terminal-text">
            Q2 – How do you currently get clients?
          </label>
          <Textarea placeholder="Cold email, referrals, paid ads, etc." className="bg-dark-200 border-gold/30 text-gold terminal-text h-24" value={formState.currentAcquisition} onChange={e => handleChange('currentAcquisition', e.target.value)} required />
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
        
        <p className="text-center text-gold/70 terminal-text text-sm mt-4">
          We review every application manually. If your agency is a fit, we'll reach out.
        </p>
      </form>
    </div>;
};
export default ApplicationForm;