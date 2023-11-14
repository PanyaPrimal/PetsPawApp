import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Stack = ({ children, gap = 10, ...props }) => {
  const [parent] = useAutoAnimate();
	const stackClasses = `
    max-w-full flex flex-col
    ${props.className || ''}
  `;

	return (
		<div
			className={stackClasses}
			style={{ gap: `${gap}px` }}
			{...props}
      ref={parent}
		>
			{children}
		</div>
	);
};

export default Stack;
