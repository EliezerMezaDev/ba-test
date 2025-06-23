import React, { createContext, useState, useEffect, ReactNode } from "react";
import { TranslationData, LanguageContextProps } from "../types/i18n";

export const LanguageContext = createContext<LanguageContextProps>({
  language: "es",
  translations: {} as TranslationData,
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("es");
  const [translations, setTranslations] = useState<TranslationData>(
    {} as TranslationData
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    const langCode = browserLang.startsWith("en") ? "es" : "en";

    loadTranslations(langCode);
  }, []);

  const loadTranslations = async (lang: string) => {
    setLoading(true);
    try {
      const module = await import(`../assets/langs/${lang}.json`);

      setTranslations(module.default);
      setLanguage(lang);

      localStorage.setItem("preferredLanguage", lang);
    } catch (error) {
      console.error(`Error cargando traducciones: ${error}`);

      const fallback = await import("../assets/langs/en.json");
      setTranslations(fallback.default);
      setLanguage("es");
    } finally {
      setLoading(false);
    }
  };

  const changeLanguage = async (newLang: string) => {
    if (newLang !== language) {
      await loadTranslations(newLang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, changeLanguage }}
    >
      {loading ? <div>Cargando...</div> : children}
    </LanguageContext.Provider>
  );
};
