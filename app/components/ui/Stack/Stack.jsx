import React from 'react';

const Stack = ({ children, gap = 10, ...props }) => {
	const stackClasses = `max-w-full flex flex-col ${props.className || ''}`;

	return (
		<div
			className={stackClasses}
			style={{ gap: `${gap}px` }}
			{...props}
		>
			{children}
		</div>
	);
};

export default Stack;
