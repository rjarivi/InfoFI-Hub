import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ExternalLink } from 'lucide-react';

interface ParlePopupAdProps {
  isOpen: boolean;
  onClose: () => void;
}

const ParlePopupAd: React.FC<ParlePopupAdProps> = ({ isOpen, onClose }) => {
  const handleJoinNow = () => {
    window.open('https://parle.id/ref/rjarivi', '_blank');
  };

  const handleImageClick = () => {
    window.open('https://parle.id/token/12CQiTguykF3yP7j91zC3Uhia85XPp9ZSENSKtGNprLe', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Join JEET.ING Circle on Parle
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-600 mt-2">
            Parle is an info token launchpad built on Solana. Join our JEET.ING Token circle to start earning points and qualify for token rewards when it graduates.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Image */}
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div 
                className="cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
                onClick={handleImageClick}
              >
                <img 
                  src="/assets/Jeet.ing.png" 
                  alt="JEET.ING Circle" 
                  className="w-full h-auto"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>View JEET.ING Token on Parle</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Description */}
          <p className="text-sm text-gray-700 text-center">
            You can help circle graduates in 7-day period and earn incentives while farming for Parle Platform Token.
          </p>
          
          {/* CTA Button */}
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button 
                onClick={handleJoinNow}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Join Now
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>parle.id</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ParlePopupAd;
