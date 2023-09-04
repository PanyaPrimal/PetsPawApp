import React from 'react'
import styles from './button.module.css';

const NavButton = ({ buttonText, className }) => {
  return (
    <div 
      className={`${styles.button} ${className}`}
      style={{
      }}
    >
      {buttonText}
    </div>
  )
}

export default NavButton