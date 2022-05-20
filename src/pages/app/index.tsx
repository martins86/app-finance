import React from 'react';

import RoutesApp from '../../routes';

import './styles.css';

import { AuthProvider } from '../../contexts/auth-context';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </div>
  );
};

export default App;
