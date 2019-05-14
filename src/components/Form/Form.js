import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from '../Form/FormRadio';
import styles from './Form.module.scss';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}

const descriptions = {
    twitter: 'Twitter account',
    article: 'Article',
    note: 'Note',
}

class Form extends React.Component {
    state = {
        activeOption: types.twitter,
    }

    handleRadioChange = (type) => {
        this.setState({
            activeOption: type,
        })
    }

    render() {
        const { activeOption } = this.state;
        return (
            <div className={styles.wrapper}>
                <Title>Add new {descriptions[activeOption]}</Title>
                <form
                    className={styles.form}
                    onSubmit={this.props.submitFn}
                    autoComplete="off"
                >
                    <div className={styles.formOptions}>
                        <Radio
                            id={types.twitter}
                            checked={activeOption === types.twitter}
                            changeFn={() => this.handleRadioChange(types.twitter)}
                        >
                            Twitter
                        </Radio>
                        <Radio
                            id={types.article}
                            checked={activeOption === types.article}
                            changeFn={() => this.handleRadioChange(types.article)}
                        >
                            Article
                        </Radio>
                        <Radio
                            id={types.note}
                            checked={activeOption === types.note}
                            changeFn={() => this.handleRadioChange(types.note)}
                        >
                            Note
                        </Radio>
                    </div>
                    <Input
                        name="name"
                        label={activeOption === types.twitter ? 'Twitter name' : 'Title'}
                        maxLength={30}
                    />
                    {activeOption !== types.note ? <Input name="link" label={activeOption === types.twitter ? 'Twitter link' : 'Link'} /> : null}
                    {activeOption === types.twitter ? <Input name="image" label="Image" required={false} /> : null}
                    <Input
                        tag="textarea"
                        name="description"
                        label="Description"
                    />
                    <Button>Add New Item</Button>
                </form>
            </div>
        )
    }
}

export default Form;