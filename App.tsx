import React from 'react';

import MainRoute from './src/routes/Main';
import AuthenticationRoute from './src/routes/AuthenticationRoute';
import LanguageContextProvider from './src/contexts/LanguageContext';

const isSignedIn = true;
export default function App() {
  return (
    <LanguageContextProvider>
      {isSignedIn ? <MainRoute /> : <AuthenticationRoute />}
    </LanguageContextProvider>
  );
}
