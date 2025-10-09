import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { BubbleMenu } from "@/components/ui/bubble-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  logo?: string;
}

interface ResponsiveNavigationProps {
  mainItems: NavigationItem[];
  overflowItems: NavigationItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
  className?: string;
}

export function ResponsiveNavigation({ 
  mainItems, 
  overflowItems, 
  activeItem, 
  onItemClick, 
  className 
}: ResponsiveNavigationProps) {
  const isMobile = useIsMobile();
  const allItems = [...mainItems, ...overflowItems];

  // Find the active item for display
  const activeItemData = allItems.find(item => item.id === activeItem);

  if (isMobile) {
    return (
      <div className={cn("w-full max-w-sm mx-auto", className)}>
        <Select value={activeItem} onValueChange={onItemClick}>
          <SelectTrigger className="w-full h-12 md:h-auto glass-card border-primary/30 hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Select platform">
              <div className="flex items-center gap-3">
                {activeItemData?.logo ? (
                  <img 
                    src={activeItemData.logo} 
                    alt={`${activeItemData.label} logo`} 
                    className="w-4 h-4 md:w-4 md:h-4 object-contain" 
                  />
                ) : (
                  <div className="w-4 h-4 md:w-4 md:h-4 flex items-center justify-center">
                    {activeItemData?.icon}
                  </div>
                )}
                <span className="text-sm md:text-base">{activeItemData?.label}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="glass-card border-primary/30 z-[60]">
            {allItems.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <div className="flex items-center gap-2">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={`${item.label} logo`} 
                      className="w-3 h-3 md:w-4 md:h-4 object-contain" 
                    />
                  ) : (
                    <div className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center">
                      {item.icon}
                    </div>
                  )}
                  <span>{item.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

        // Desktop version - all items in main bar
        return (
          <div className={cn("flex items-center", className)}>
            {/* All navigation items in main bar */}
            <div className="flex gap-2 p-1 rounded-2xl glass-card">
              {mainItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onItemClick(item.id)}
                  className={cn(
                    "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    "hover:scale-105 active:scale-95",
                    activeItem === item.id
                      ? "bg-card/80 backdrop-blur-sm text-foreground border border-primary/30 shadow-lg relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/20 before:to-secondary/20 before:-z-10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center gap-2 w-full">
                    {item.logo ? (
                      <img src={item.logo} alt={`${item.label} logo`} className="w-4 h-4 object-contain" />
                    ) : (
                      item.icon
                    )}
                    <span>{item.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );
}

// Updated interface for hybrid navigation
