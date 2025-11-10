import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LeadGenerator from './components/LeadGenerator';
import LoginScreen from './components/LoginScreen';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ThemeProvider>
      {user ? (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <LeadGenerator user={user} onLogout={handleLogout} />
        </div>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </ThemeProvider>
  );
}

export default App;
