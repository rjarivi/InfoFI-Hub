import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Language } from "@/data/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
];

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as Language);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className={className}>
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[100px] md:w-[140px] h-10 md:h-12 glass-card border-primary/30 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <SelectValue>
              <div className="flex items-center gap-2">
                <span className="text-base md:text-lg">{currentLanguage?.flag}</span>
                <span className="text-xs md:text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
              </div>
            </SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent className="glass-card border-primary/30 max-h-[300px] overflow-y-auto">
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center gap-3 py-1">
                <span className="text-lg">{language.flag}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{language.nativeName}</span>
                  <span className="text-xs text-muted-foreground">{language.name}</span>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
