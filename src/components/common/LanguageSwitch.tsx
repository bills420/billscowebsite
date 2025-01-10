import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' }
];

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-pure-white hover:text-off-white transition-colors">
        <Globe className="h-5 w-5" />
        <span className="uppercase">{language}</span>
      </button>

      <div className="absolute right-0 mt-2 w-32 py-2 bg-matte-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`w-full px-4 py-2 text-left hover:bg-deep-black transition-colors ${
              language === lang.code ? 'text-pure-white' : 'text-off-white'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;