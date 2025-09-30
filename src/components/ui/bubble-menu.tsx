import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BubbleMenuProps {
  items: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
    logo?: string;
  }>;
  activeItem: string;
  onItemClick: (id: string) => void;
  className?: string;
}

export function BubbleMenu({ items, activeItem, onItemClick, className }: BubbleMenuProps) {
  return (
    <div className={cn("flex gap-2 p-1 rounded-2xl glass-card w-fit", className)}>
      {items.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className={cn(
            "relative px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap",
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
  );
}