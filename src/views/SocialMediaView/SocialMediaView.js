import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const SocialMediaView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.social} />
        )}
    </AppContext.Consumer>
);

export default SocialMediaView;