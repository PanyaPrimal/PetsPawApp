import React from 'react'

const NavButton = ({ buttonText, className }) => {
  return (
    <div 
      className={`${className}`}
    >
      {buttonText}
    </div>
  )
}

export default NavButton