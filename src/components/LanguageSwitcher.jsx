import React from 'react';
import { useLanguage } from '../i18n/useLanguage.jsx';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={handleLanguageChange}
      aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '8px 12px',
        cursor: 'pointer',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        color: '#333',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease',
        ':hover': {
          background: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }
      }}
    >
      {language === 'en' ? '中' : 'EN'}
    </button>
  );
}
