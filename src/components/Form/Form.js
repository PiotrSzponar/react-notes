import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import Title from '../Title/Title';

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <Title>Add new twitter account</Title>
        <form
            className={styles.form}
            onSubmit={submitFn}
            autoComplete="off"
        >
            <Input
                name="name"
                label="Name"
                maxLength={30}
            />
            <Input
                name="link"
                label="Twitter link"
            />
            <Input
                name="image"
                label="Image"
                required={false}
            />
            <Input
                tag="textarea"
                name="description"
                label="Description"
            />
            <Button>Add New Item</Button>
        </form>
    </div>
);

export default Form;