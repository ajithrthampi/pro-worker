import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context
interface BooleanContextType {
    languageValue: any;
    setLanguageValue: (value: any) => void;
}

// Create the context with a default value
const LanguageBooleanContext = createContext<BooleanContextType | undefined>(undefined);

// Create a custom hook for easier context consumption
export const LanguageContext = () => {
  const context = useContext(LanguageBooleanContext);
  if (!context) {
    throw new Error('useBooleanContext must be used within a BooleanProvider');
  }
  return context;
};

// Create the provider component
interface BooleanProviderProps {
  children: ReactNode;
}

export const LanguageBooleanProvider: React.FC<BooleanProviderProps> = ({ children }) => {
  const [languageValue, setLanguageValue] = useState<any>(null);

   // Load the initial value from local storage
   useEffect(() => {
    const storedLanguage = localStorage.getItem('languageValue');
    if (storedLanguage) {
      setLanguageValue(storedLanguage);
    } else {
      setLanguageValue('ENG'); // Default value if nothing is in local storage
    }
  }, []);

   // Update local storage whenever the languageValue changes
   useEffect(() => {
    if (languageValue !== null) {
      localStorage.setItem('languageValue', languageValue);
    }
  }, [languageValue]);

  return (
    <LanguageBooleanContext.Provider value={{ languageValue, setLanguageValue }}>
      {children}
    </LanguageBooleanContext.Provider>
  );
};
