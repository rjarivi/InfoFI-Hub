import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HamburgerMenuProps {
  className?: string;
}

export function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleResourcesClick = () => {
    navigate('/resources');
    setIsMenuOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Hamburger Menu Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-lg glass-card border-primary/30 hover:border-primary/50 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>
      
      {/* Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-2 p-4 glass-card border border-primary/30 rounded-xl z-50 min-w-[200px]"
        >
          <div className="space-y-2">
            <button
              onClick={handleResourcesClick}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
            >
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}