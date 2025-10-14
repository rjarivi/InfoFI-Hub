import { useLanguage } from "@/hooks/use-language";

interface HideEndedToggleProps {
  hideEnded: boolean;
  onToggle: (hideEnded: boolean) => void;
  className?: string;
}

export function HideEndedToggle({ hideEnded, onToggle, className }: HideEndedToggleProps) {
  const { t } = useLanguage();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Custom Toggle Switch - Light Lion Style */}
      <div 
        className={`relative inline-flex h-5 w-9 cursor-pointer rounded-full transition-all duration-300 ease-in-out shadow-inner ${
          hideEnded 
            ? 'bg-gradient-to-r from-primary to-primary/80 shadow-primary/20' 
            : 'bg-gradient-to-r from-muted to-muted/80 shadow-muted/20'
        }`}
        onClick={() => onToggle(!hideEnded)}
      >
        {/* Background glow effect */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          hideEnded ? 'bg-primary/20 opacity-100' : 'bg-muted/20 opacity-50'
        }`} />
        
        {/* Toggle thumb */}
        <span
          className={`pointer-events-none absolute top-0.5 h-4 w-4 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
            hideEnded ? 'translate-x-4' : 'translate-x-0.5'
          }`}
          style={{
            boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)'
          }}
        />
        
        {/* Inner highlight */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          hideEnded ? 'bg-gradient-to-r from-white/20 to-transparent opacity-100' : 'opacity-0'
        }`} />
      </div>
      
      <label 
        className="text-xs font-medium cursor-pointer hover:text-primary transition-colors text-muted-foreground select-none"
        onClick={() => onToggle(!hideEnded)}
      >
        {t("hideExpiredProjects")}
      </label>
    </div>
  );
}
