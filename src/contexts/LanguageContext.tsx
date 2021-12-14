import React, {useState} from 'react';

export const LanguageContext = React.createContext(true);

export default function LanguageContextProvider({children}: {children: any}) {
  const [languageOption, setLanguageOption] = useState(true);

  return (
    <LanguageContext.Provider
      value={{
        languageOption,
        setLanguageOption,
      }}>
      {children}
    </LanguageContext.Provider>
  );
}
