import React from 'react'
import styles from './button.module.css';
import { useTheme } from 'next-themes';

const NavButton = ({ buttonText, className }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={`
      ${styles.button} 
      ${className}
      ${theme === 'dark' ? 'dark' : 'light'}
      `}
    >
      {buttonText}
    </div>
  )
}

export default NavButton