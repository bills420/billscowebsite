import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const translations: Record<Language, Record<string, string>> = {
    en: {
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'cta.start': 'Start Project',
      'cta.quote': 'Get Quote'
    },
    es: {
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.portfolio': 'Portafolio',
      'nav.about': 'Nosotros',
      'nav.contact': 'Contacto',
      'cta.start': 'Iniciar Proyecto',
      'cta.quote': 'Obtener Cotización'
    },
    zh: {
      'nav.home': '首页',
      'nav.services': '服务',
      'nav.portfolio': '作品集',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'cta.start': '开始项目',
      'cta.quote': '获取报价'
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};