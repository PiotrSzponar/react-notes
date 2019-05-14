import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../Header/Header';
import Modal from '../../Modal/Modal';

const initialStateItems = [
  {
    image: '../../../assets/images/danabramov.jpg',
    name: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
  },
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: false,
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <h1>Hello world</h1>
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
