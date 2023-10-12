
import React from 'react';
import styles from "./userLogItem.module.scss";

const UserLogItem = ({
	icon,
	iconPosition = "end",
	time,
	text,
	imageId,
	color = "gray",
	...props
}) => {
	const userLogItemClasses = `
  ${styles.userLogItem} 
	${color === "gray" ? "bg-white-soft" : '' }
	${color === "white" ?	"bg-white" : '' }
  ${props.className || ''}
`
	return (
		<div className={userLogItemClasses} {...props}>
			{iconPosition === "start" && icon}
			{time && <span className={classes.userLogItem__time}>{time}</span>}
			<p
				className={classNames({
					[classes.userLogItem__text]: true,
					["sm:order-1 sm:min-w-full"]: iconPosition === "end",
				})}
			>
				{imageId && (
					<>
						Image ID:{" "}
						<span className="w-fit inline">{imageId}</span>
					</>
				)}{" "}
				{text}
			</p>
			{iconPosition === "end" && icon}
		</div>
	);
};

export default UserLogItem;
