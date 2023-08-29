import React from 'react'
import styles from './button.module.css';

const NavButton = ({buttonText}) => {
  return (
    <div className={`${styles.button}`}>
      {buttonText}
    </div>
  )
}

export default NavButton