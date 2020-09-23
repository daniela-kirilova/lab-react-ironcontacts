import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactList from './ContactList';
class App extends React.Component {
  state = {
    contact: contacts.slice(0, 5),
  };

  addContact = () => {
    const newContact = contacts[contacts.length * Math.random() | 0]
    
    const contactCopy = this.state.contact.slice();
    contactCopy.push(newContact);
    this.setState({
      contact: contactCopy,
    });
  };
  sortByName=()=>{
    const nameSorted = this.state.contact.slice()
    nameSorted.sort((a,b)=>
      (a.name < b.name) ? -1 : ((a.name> b.name) ? 1:0))
   
  this.setState({
      contact: nameSorted
  })
  }
  sortByPopularity= ()=>{
const popularitySorted = this.state.contact.slice()
popularitySorted.sort((a,b)=>
  (a.popularity > b.popularity) ? -1 : ((a.popularity < b.popularity) ? 1 : 0))
   
  this.setState({
      contact: popularitySorted
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>       
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <ContactList contact={this.state.contact} />
      </div>
    );
  }
}

export default App;
