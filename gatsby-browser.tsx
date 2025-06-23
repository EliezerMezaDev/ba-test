import React from "react";
import { LanguageProvider } from "./src/context/LanguageContext";

import "./src/assets/scss/styles.scss";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
