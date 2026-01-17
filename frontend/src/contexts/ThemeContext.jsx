import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [isThemeLoading, setIsThemeLoading] = useState(false);

  // Sync theme class to root elements
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    if (isThemeLoading) return;
    
    setIsThemeLoading(true);
    
    // Switch state after a short delay to show the overlay
    setTimeout(() => {
      setIsDarkMode(prev => !prev);
      
      // Keep overlay for a bit longer so the transition is smooth
      setTimeout(() => {
        setIsThemeLoading(false);
      }, 500);
    }, 600);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, isThemeLoading }}>
      {/* Global Loading Overlay for Theme Switching */}
      {isThemeLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md transition-all duration-500 animate-in fade-in">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-200 dark:border-purple-900 rounded-full"></div>
              <div className="absolute top-0 w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Updating Theme
              </h2>
              <p className="text-gray-500 dark:text-gray-400 animate-pulse">
                {isDarkMode ? 'Preparing light mode...' : 'Preparing dark mode...'}
              </p>
            </div>
          </div>
        </div>
      )}
      {children}
    </ThemeContext.Provider>
  );
};

