import React from 'react';
import Form from '../Form/Form';
import styles from './Modal.module.scss';

const Modal = ({ closeModalFn }) => (
    <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModalFn} />
        <Form />
    </div>
);

export default Modal;