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

interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  logo?: string;
}

interface ResponsiveNavigationProps {
  items: NavigationItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
  className?: string;
}

export function ResponsiveNavigation({ 
  items, 
  activeItem, 
  onItemClick, 
  className 
}: ResponsiveNavigationProps) {
  const isMobile = useIsMobile();

  // Find the active item for display
  const activeItemData = items.find(item => item.id === activeItem);

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
            {items.map((item) => (
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

  // Desktop version - use BubbleMenu
  return (
    <BubbleMenu
      items={items}
      activeItem={activeItem}
      onItemClick={onItemClick}
      className={className}
    />
  );
}
