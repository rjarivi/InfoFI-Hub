import { useLanguage } from "@/hooks/use-language";

interface HideEndedToggleProps {
  hideEnded: boolean;
  onToggle: (hideEnded: boolean) => void;
  className?: string;
}

export function HideEndedToggle({ hideEnded, onToggle, className }: HideEndedToggleProps) {
  const { t } = useLanguage();
  // Temporarily hide the toggle as requested
  return null;
}
