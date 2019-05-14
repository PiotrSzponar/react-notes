import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './ListItem.module.scss';

const ListItem = ({ image, name, description, twitterLink }) => {
    const ImageTag = image ? 'img' : 'div';

    return (
        <li className={styles.wrapper}>
            <ImageTag
                src={image}
                className={image ? `${styles.image}` : `${styles.imageNone}`}
                alt={name}
            />
            <div>
                <Title>{name}</Title>
                <p className={styles.description}>
                    {description}
                </p>
                <Button
                    href={twitterLink}
                >
                    visit twitter page
                </Button>
            </div>
        </li>
    )
};

ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    image: null,
}

export default ListItem;