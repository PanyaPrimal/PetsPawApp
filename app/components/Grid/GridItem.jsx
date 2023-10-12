import React from 'react';
import styles from '/GridItem.module.scss';

const defaultElement = 'div';

function GridItem(
	{
		children,
		component,
		isHoverable,
		actionButton,
		title,
		...props
	},
	ref
) {
	const TagName = component || defaultElement;
	const buttonClasses = `
		${styles.grid__item} 
    ${isHoverable ? styles.grid__item__hover : ''} 
    ${props.className || ''}
  `

	return (
		<TagName className={buttonClasses} {...ref} {...props}>
			{children}
			{isHoverable && (
				<>
					<div className={styles.grid__item__wrapper}>
						<div className={styles.grid__item__action}>
							{actionButton}
						</div>
					</div>

					<div className={styles.grid__item__title}>{title}</div>
				</>
			)}
		</TagName>
	);
};
export default React.forwardRef(GridItem);
