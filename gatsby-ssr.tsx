import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <LanguageProvider>{element}</LanguageProvider>
);