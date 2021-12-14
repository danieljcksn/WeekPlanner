import React from 'react';

import MainRoute from './src/routes/Main';
import AuthenticationRoute from './src/routes/AuthenticationRoute';

const isSignedIn = true;
export default function App() {
  return isSignedIn ? <MainRoute /> : <AuthenticationRoute />;
}
