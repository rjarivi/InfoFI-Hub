import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Browser language detection
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  const supportedLanguages: Language[] = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'];
  
  // Check if browser language is supported
  if (supportedLanguages.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  
  // Check for language variants (e.g., en-US -> en)
  const baseLang = browserLang.split('-')[0];
  if (supportedLanguages.includes(baseLang as Language)) {
    return baseLang as Language;
  }
  
  // Default to English
  return 'en';
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from localStorage or browser
  useEffect(() => {
    if (!isInitialized) {
      // Try to get saved language from localStorage first
      const savedLanguage = localStorage.getItem('infofi-language') as Language;
      
      if (savedLanguage && ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      } else {
        // Fallback to browser language detection
        const detectedLanguage = detectBrowserLanguage();
        setLanguageState(detectedLanguage);
      }
      
      setIsInitialized(true);
      
      // Update document and meta tags
      updateDocumentMeta(savedLanguage || detectBrowserLanguage());
    }
  }, [isInitialized]);

  // Update document meta tags
  const updateDocumentMeta = (lang: Language) => {
    document.documentElement.lang = lang;
    
    const translation = translations[lang];
    if (translation) {
      document.title = translation.pageTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', translation.pageDescription);
      }
    }
  };

  // Update language without changing URL
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Save to localStorage for future visits
    localStorage.setItem('infofi-language', newLanguage);
    
    // Update document meta tags
    updateDocumentMeta(newLanguage);
  };

  // Translation function with improved fallback
  const t = (key: TranslationKey): string => {
    // Try current language first
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    
    // Fallback to English
    if (translations.en && translations.en[key]) {
      console.warn(`Translation missing for key "${key}" in language "${language}", falling back to English`);
      return translations.en[key];
    }
    
    // Final fallback - return the key itself
    console.error(`Translation missing for key "${key}" in all languages`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}