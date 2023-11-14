import React from 'react';
import styles from "./Grid.module.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Grid = ({ children, ...props }) => {
	const gridClasses = `
		${styles.grid} 
		${props.className || ''} 
  `
  const [parent] = useAutoAnimate();

	return (
		<div className={gridClasses} ref={parent} {...props}>
			{children}
		</div>
	);
};

export default Grid;
