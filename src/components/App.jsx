import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = contact => {
    const addContacts = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, addContacts],
    }));
  };
  inputFilter = e => {
    this.setState({ filter: e.target.value });
  };
  filteredContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };
  deleteContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(e => e.id !== id),
    }));
  }
  render() {
    return (
      <div>
        <ContactForm
          onSubmit={this.handleSubmit}
          value={this.state.value}
        ></ContactForm>
        <h2>contacts</h2>
        <Filter value={this.state.filter} onChange={this.inputFilter}></Filter>
        <ul>
          {this.filteredContact().map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button type="button" onClick={() => this.deleteContact(id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
