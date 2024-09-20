import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface BooleanContextType {
  value: boolean;
  setValue: (value: boolean) => void;
}

// Create the context with a default value
const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

// Create a custom hook for easier context consumption
export const ModalContext = () => {
  const context = useContext(BooleanContext);
  if (!context) {
    throw new Error('useBooleanContext must be used within a BooleanProvider');
  }
  return context;
};

// Create the provider component
interface BooleanProviderProps {
  children: ReactNode;
}

export const BooleanProvider: React.FC<BooleanProviderProps> = ({ children }) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <BooleanContext.Provider value={{ value, setValue }}>
      {children}
    </BooleanContext.Provider>
  );
};
