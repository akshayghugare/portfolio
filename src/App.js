import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import IndexRoute from './Routes/IndexRoute';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-grow  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <button
              onClick={toggleTheme}
              className="mb-5 ml-2 px-4 py-2 rounded bg-blue-500 text-white fixed bottom-0 left-0  flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <Routes>
              <Route path="/*" element={<IndexRoute />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
