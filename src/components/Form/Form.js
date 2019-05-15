import React from 'react';
import AppContext from '../../context';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from '../Form/FormRadio';
import styles from './Form.module.scss';

const types = {
    note: 'note',
    article: 'article',
    social: 'social',
};

const descriptions = {
    note: 'Note',
    article: 'Article',
    social: 'Social Media account',
};

class Form extends React.Component {
    state = {
        type: types.note,
        title: '',
        link: '',
        image: '',
        description: '',
    };

    handleRadioChange = type => {
        this.setState({
            type: type,
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { type } = this.state;
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                        <Title>Add new {descriptions[type]}</Title>
                        <form
                            className={styles.form}
                            onSubmit={(e) => context.addItem(e, this.state)}
                            autoComplete="off"
                        >
                            <div className={styles.formOptions}>
                                <Radio
                                    id={types.note}
                                    checked={type === types.note}
                                    changeFn={() => this.handleRadioChange(types.note)}
                                >
                                    Note
                                </Radio>
                                <Radio
                                    id={types.article}
                                    checked={type === types.article}
                                    changeFn={() => this.handleRadioChange(types.article)}
                                >
                                    Article
                                </Radio>
                                <Radio
                                    id={types.social}
                                    checked={type === types.social}
                                    changeFn={() => this.handleRadioChange(types.social)}
                                >
                                    Social Media
                                </Radio>
                            </div>
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                name="title"
                                label={type === types.social ? 'Profile name' : 'Title'}
                            />
                            {type !== types.note ? (
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.link}
                                    name="link"
                                    label={type === types.social ? 'Profile link' : 'Link'}
                                />
                            ) : null}
                            {type === types.social ? (
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.image}
                                    name="image"
                                    label="Image"
                                    required={false}
                                />
                            ) : null}
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.description}
                                tag="textarea"
                                name="description"
                                label="Description"
                            />
                            <Button>Add New Item</Button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}

export default Form;