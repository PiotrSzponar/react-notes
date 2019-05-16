import React from 'react';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import SocialMediaView from '../SocialMediaView/SocialMediaView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import { initialNotes, initialArticles, initialSocials } from '../../demoData';

class Root extends React.Component {
  state = {
    social: [...initialSocials],
    article: [...initialArticles],
    note: [...initialNotes],
    isModalOpen: false,
  }

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));
    this.closeModal();
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
    document.body.style.overflow = 'hidden';
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
    document.body.style.overflow = 'auto';
  }

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    }

    return (
      <BrowserRouter basename="react/react-note/">
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={SocialMediaView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
