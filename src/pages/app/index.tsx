import RoutesApp from '../../routes';

import { AuthProvider } from '../../contexts/auth-context';

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </div>
  );
};

export default App;
