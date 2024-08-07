import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <button onClick={toggleDarkMode} className='p-2 rounded-full bg-gray-200 dark:bg-gray-600'>
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};
