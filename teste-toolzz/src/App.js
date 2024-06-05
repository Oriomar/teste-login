import React, { useState } from 'react';
import Banner from './components/Banner';
import LoginForm from './components/Login';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="banner-container">
        <Banner />
      </div>
      <div className="login-container">
        <LoginForm darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default App;
