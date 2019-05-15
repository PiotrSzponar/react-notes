import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label, required, ...props }) => (
    <div className={styles.formItem}>
        <Tag
            className={Tag === 'textarea' ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            required={required}
            placeholder=" "
            {...props}
        />
        <label
            className={styles.label}
            htmlFor={name}>
            {label}
        </label>
        <div className={styles.formItemBar}></div>
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
}

Input.defaultProps = {
    tag: 'input',
    required: true,
}

export default Input;