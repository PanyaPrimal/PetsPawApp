import React from 'react';
import styles from './Loader.module.scss';

const Loader = ({
  size = 'regular',
  color = 'primary',
  centered = false,
  position,
  ...props
}) => {
  const loaderClasses = `
    ${styles.loader}
    ${size === 'regular' ? styles.regular : ''}
    ${size === 'small' ? styles.small : ''}
    ${color === 'primary' ? styles.primary : ''}
    ${color === 'white' ? styles.white : ''}
    ${props.className || ''}
  `
  
  const loaderPosition = `
    ${props.className}
    ${position === 'centredInGrids' ? 'lg:right-1/4' : ''}
  `

  if (centered) {
    return (
      <div className={
        `absolute right-2/4 bottom-2/4 translate-x-2/4 translate-y-2/4
        ${loaderPosition}`
      }>
        <span className={loaderClasses} {...props}>
          <div className='sr-only'>...Loading</div>
        </span>
      </div>
    );
  }

  return (
      <span className={loaderClasses} {...props}>
        <div className='sr-only'>...Loading</div>
      </span>
  );
};

export default Loader;