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
      <div className={cn("w-full max-w-xs mx-auto", className)}>
        <Select value={activeItem} onValueChange={onItemClick}>
          <SelectTrigger className="w-full glass-card border-primary/30 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2">
              {activeItemData?.logo ? (
                <img 
                  src={activeItemData.logo} 
                  alt={`${activeItemData.label} logo`} 
                  className="w-4 h-4 object-contain" 
                />
              ) : (
                activeItemData?.icon
              )}
              <SelectValue placeholder="Select platform" />
            </div>
          </SelectTrigger>
          <SelectContent className="glass-card border-primary/30">
            {items.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <div className="flex items-center gap-2">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={`${item.label} logo`} 
                      className="w-4 h-4 object-contain" 
                    />
                  ) : (
                    item.icon
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
