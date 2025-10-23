import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const CometInvitePopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const seenPopup = localStorage.getItem('comet-invite-seen');
    if (!seenPopup) {
      // Show popup after a delay (e.g., 3 seconds)
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    setHasSeenPopup(true);
    // Mark as seen in localStorage
    localStorage.setItem('comet-invite-seen', 'true');
  };

  const handleClaimInvitation = () => {
    // Open the CTA link in a new tab
    window.open('https://pplx.ai/jeet.ing', '_blank');
    handleClose();
  };

  return (
    <Dialog open={open && !hasSeenPopup} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
        <DialogHeader className="space-y-4">
          {/* Comet Logo */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-2">
              <img 
                src="/assets/comet-logo.svg" 
                alt="Comet Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Limited Time Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="bg-gray-800 text-white border-gray-600">
              LIMITED TIME
            </Badge>
          </div>
          
          {/* Title */}
          <DialogTitle className="text-center text-2xl font-serif text-white leading-tight">
            Accept your Comet invite with Pro included
          </DialogTitle>
          
          {/* Steps */}
          <DialogDescription className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <span>Download Comet and sign into your account</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <span>Ask at least one question using Comet</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <span>Get 1 month of Perplexity Pro for free</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Button 
            onClick={handleClaimInvitation}
            className="bg-gray-200 hover:bg-gray-100 text-gray-900 font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105"
          >
            <Check className="w-4 h-4" />
            Claim invitation
          </Button>
        </div>

        {/* Optional: Add a subtle close option */}
        <div className="flex justify-center pt-2">
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-300 text-sm underline"
          >
            Maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CometInvitePopup;
