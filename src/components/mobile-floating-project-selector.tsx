import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  logo?: string;
}

interface MobileFloatingProjectSelectorProps {
  mainItems: NavigationItem[];
  overflowItems: NavigationItem[];
  activeItem: string;
  onItemChange: (id: string) => void;
  className?: string;
}

export function MobileFloatingProjectSelector({
  mainItems,
  overflowItems,
  activeItem,
  onItemChange,
  className,
}: MobileFloatingProjectSelectorProps) {
  const isMobile = useIsMobile();
  const [isPortrait, setIsPortrait] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(orientation: portrait)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia("(orientation: portrait)");
    const handleChange = () => setIsPortrait(mql.matches);
    mql.addEventListener("change", handleChange);
    setIsPortrait(mql.matches);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const allItems = [...mainItems, ...overflowItems];
  const activeItemData = allItems.find((item) => item.id === activeItem);

  // Only render on mobile/tablet portrait viewports
  if (!isMobile || !isPortrait) return null;

  // Dynamic width calculation based on donate button position/size
  const [selectorWidth, setSelectorWidth] = useState<number | undefined>(undefined);
  const spacingPx = 12; // space between dropdown and donate button
  const sidePaddingPx = 16; // wrapper px-4
  const minWidthPx = 260; // keep it usable
  const maxWidthPx = 560; // cap for aesthetic consistency

  const computeWidth = () => {
    const donateEl = document.querySelector('[data-donate-button]') as HTMLElement | null;
    if (donateEl) {
      const rect = donateEl.getBoundingClientRect();
      // available horizontal space from left padding to donate's left edge
      const available = Math.max(rect.left - sidePaddingPx - spacingPx, minWidthPx);
      const clamped = Math.min(available, maxWidthPx);
      setSelectorWidth(clamped);
    } else {
      // No donate button found: fall back to a sensible width
      setSelectorWidth(undefined);
    }
  };

  useEffect(() => {
    computeWidth();
    const onResize = () => computeWidth();
    window.addEventListener("resize", onResize);
    // Observe donate button for style/size changes
    const donateEl = document.querySelector('[data-donate-button]') as HTMLElement | null;
    let ro: ResizeObserver | null = null;
    if (donateEl && "ResizeObserver" in window) {
      ro = new ResizeObserver(() => computeWidth());
      ro.observe(donateEl);
    }
    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
    // Re-run when orientation or mobile status changes
  }, [isMobile, isPortrait]);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 px-4 pb-3",
        className
      )}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
    >
      <div
        className={cn(
          "glass-card bg-background/85 backdrop-blur-md border-border shadow-lg rounded-2xl p-3",
        )}
        style={{
          width: selectorWidth ? `${selectorWidth}px` : undefined,
          marginLeft: 0,
        }}
      >
        <Select value={activeItem} onValueChange={onItemChange}>
          <SelectTrigger className="h-12 w-full rounded-xl border-primary/30 hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Select platform">
              <div className="flex items-center gap-3">
                {activeItemData?.logo ? (
                  <img
                    src={activeItemData.logo}
                    alt={`${activeItemData.label} logo`}
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center">
                    {activeItemData?.icon}
                  </div>
                )}
                <span className="text-base font-medium">
                  {activeItemData?.label}
                </span>
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
                      className="w-4 h-4 object-contain"
                    />
                  ) : (
                    <div className="w-4 h-4 flex items-center justify-center">
                      {item.icon}
                    </div>
                  )}
                  <span className="text-sm">{item.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}

export default MobileFloatingProjectSelector;