import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  // Extract language from URL path
  const getLanguageFromPath = (pathname: string): Language => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (firstSegment && ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'].includes(firstSegment)) {
      return firstSegment as Language;
    }
    
    return 'en'; // Default fallback
  };

  // Initialize language from URL
  useEffect(() => {
    if (!isInitialized) {
      const urlLanguage = getLanguageFromPath(location.pathname);
      setLanguageState(urlLanguage);
      setIsInitialized(true);
      
      // Update document and meta tags
      updateDocumentMeta(urlLanguage);
    }
  }, [location.pathname, isInitialized]);

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

  // Update language and URL
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Update URL to reflect language change
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Remove current language from path if it exists
    if (['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'].includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Build new path with new language
    const newPath = `/${newLanguage}${pathSegments.length > 0 ? '/' + pathSegments.join('/') : ''}`;
    navigate(newPath, { replace: true });
    
    // Save to localStorage for future visits
    localStorage.setItem('infofi-language', newLanguage);
    
    // Update document meta tags
    updateDocumentMeta(newLanguage);
    
    // Update hreflang meta tags for SEO
    updateHreflangTags(newLanguage);
  };

  // Update hreflang tags for SEO
  const updateHreflangTags = (currentLang: Language) => {
    const baseUrl = window.location.origin;
    const languages: Language[] = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar'];
    
    // Remove existing hreflang tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(tag => tag.remove());
    
    // Add hreflang tags for all languages
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}/${lang}`;
      document.head.appendChild(link);
    });
    
    // Add x-default hreflang
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${baseUrl}/en`;
    document.head.appendChild(defaultLink);
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