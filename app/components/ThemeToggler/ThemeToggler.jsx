'use client'

import { ThemeEyeClosed, ThemeEyeOpen, ThemeTogglerLeft, ThemeTogglerRight } from '@public/assets/svg';
import React, { useState } from 'react';
import styles from './togler.module.css';

export const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark', isDarkTheme);
  };

  return (
    <div>
      <div className='flex items-center' onClick={toggleTheme}>
        {isDarkTheme ? (
          <ThemeEyeOpen className={`rounded-[20px] w-6 h-6 bg-white p-1 mr-[5px] ${styles}`} />
        ) : (
          <ThemeEyeClosed className={`rounded-[20px] w-6 h-6 bg-[#FFFFFF0D] p-1 bg-opacity-5 mr-[5px] ${styles}`} />
        )}
        {isDarkTheme ? (
          <ThemeTogglerLeft className={{styles}} />
        ) : (
          <ThemeTogglerRight className={{styles}} />
        )}
      </div>
    </div>
  );
};
