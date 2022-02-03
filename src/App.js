import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import shortid from 'shortid';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
});

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section>
          <h1 className="title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section>
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
export default App;
