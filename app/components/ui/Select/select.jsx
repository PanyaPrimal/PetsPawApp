import React, { ComponentPropsWithRef, FC } from "react";
import styles from "./Select.module.scss";

const Select = ({ ...props }) => {
	const selectClasses = `{
		${styles.select}
		${props.className}
	`
	delete props.className;

	return (
		<select className={selectClasses} {...props}>
			{props.children}
		</select>
	);
};

export default Select;
