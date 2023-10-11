'use client'

import React from 'react'
import styles from './Button.module.scss'

const defaultElement = 'button';

function Button(
  {
    className,
    children,
    color = 'primary',
    isLoading,
    loaderColor = 'white',
    loaderSize = 'small',
    fullWidth,
    component,
    ...props
  },
  ref
) {
  const TagName = component || defaultElement;
  const buttonClasses = `
    ${className === `${className}`}
    ${styles.button}
    ${props.className || ''}
    ${color === 'primary' ? styles.button__primary : ''}
    ${color === 'primarySoft' ? styles.button__primarySoft : ''}
    ${color === 'default' ? styles.button__default : ''}
    ${color === 'gray' ? styles.button__gray : ''}
    ${fullWidth ? 'w-full' : ''}
    
  `;

  return (
    <TagName className={`${className} ${buttonClasses}`} {...ref} {...props}>
      {isLoading && <Loader color={loaderColor} size={loaderSize} />}
      {children}
    </ TagName>
  )
}

export default Button;