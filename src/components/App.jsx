import React, {Component} from "react";
import shortid from "shortid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";


class App extends Component {
  state = {
    contacts: [    
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

addName = (data) => {

  const addname = {
    ...data,
    id: shortid.generate(),
  };

  
  this.setState(prevState => {
    if (prevState.contacts.find(({ name }) => name === addname.name)) {
    return alert(`${addname.name} is already in contacts`);
  }
   return {contacts: [addname, ...prevState.contacts]};
  });
}

changeFilter = e => {
  this.setState({filter: e.currentTarget.value});
}

deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
};

componentDidMount() {
  const contacts = localStorage.getItem('contacts');
  const parsedСontacts = JSON.parse(contacts);

  if (parsedСontacts) {
    this.setState({contacts: parsedСontacts});
  }
}

componentDidUpdate(prevProps, prevState) {

  if (this.state.contacts !== prevState.contacts) {
    console.log('оновилось поле тодос');

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}


render() {

  const normalizedFilter = this.state.filter.toLowerCase();

  const visibleContacts = this.state.contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div >
       <h1>Phonebook</h1>

       <ContactForm  onSubmit={this.addName}/>

       <h2>Contacts</h2>
   
       <Filter value={this.state.filter} onChange={this.changeFilter}/>
       <ContactList contacts={visibleContacts}
        onDeletecontact={this.deleteContact}/>
    </div>
  );
};
}

export default App;

