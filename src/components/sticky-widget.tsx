import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface StickyWidgetProps {
  onClick: () => void;
}

const StickyWidget: React.FC<StickyWidgetProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Join Jeet.ing Circle</span>
        <span className="sm:hidden">Join Circle</span>
      </Button>
    </div>
  );
};

export default StickyWidget;
