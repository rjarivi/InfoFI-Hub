import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart3, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HamburgerMenuProps {
  className?: string;
}

export function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-4 h-4" />,
      action: () => {
        navigate("/");
        setIsOpen(false);
      }
    },
    {
      id: "leaderboards",
      label: "Leaderboards",
      icon: <BarChart3 className="w-4 h-4" />,
      action: () => {
        navigate("/leaderboards");
        setIsOpen(false);
      }
    }
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass-card flex items-center justify-center hover:bg-muted/50 transition-colors"
        aria-label="Open menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-48 glass-card rounded-xl border border-primary/30 shadow-lg z-50"
            >
              <div className="p-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
