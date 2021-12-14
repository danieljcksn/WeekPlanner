import React from 'react';

import MainRoute from './src/routes/Main';
import AuthenticationRoute from './src/routes/AuthenticationRoute';

const isSignedIn = false;
export default function App() {
  return isSignedIn ? <MainRoute /> : <AuthenticationRoute />;
}
