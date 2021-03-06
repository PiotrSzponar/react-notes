import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}
                    to="/">
                    Social Media
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}
                    to="/articles">
                    Articles
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}
                    to="/notes">
                    Notes
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNav;