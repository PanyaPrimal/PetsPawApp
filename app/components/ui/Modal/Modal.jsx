import React from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { closeModal } from '@app/store/reducers/modalSlice';

const Modal = ({ ...props }) => {
	const dispatch = useAppDispatch();

	const { isModalOpen } = useAppSelector((state) => state.modal);

	const modalStyles = `
		${styles.modal}
		${isModalOpen ? styles.active : ''}
    ${props.className || ''}
	`;
	delete props.className;

	return (
		<div className={modalStyles} onClick={() => dispatch(closeModal())}>
			{props.children}
		</div>
	);
};

export default Modal;
