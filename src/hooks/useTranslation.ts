import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const useTranslation = () => {
  const { translations } = useContext(LanguageContext);

  const t = (path: string, defaultValue = "") => {
    const keys = path.split(".");
    let value: any = translations;

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return defaultValue || path;
      }
    }

    return value || defaultValue || path;
  };

  return t;
};
