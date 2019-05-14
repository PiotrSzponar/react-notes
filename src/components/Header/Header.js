import React from 'react';
import Button from '../Button/Button';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = () => (
    <header className={styles.wrapper}>
        <img src={logoImage} alt="Logo" />
        <HeaderNav />
        <Button secondary>New Item</Button>
    </header>
);

export default Header;