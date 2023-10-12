import React from 'react';
import styles from "./Grid.module.scss";

const Grid = ({ children, ...props }) => {
	const gridClasses = `
		${styles.grid} 
		${props.className || ''} 
  `

	return (
		<div className={gridClasses} {...props}>
			{children}
		</div>
	);
};

export default Grid;
