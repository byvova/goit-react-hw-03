import { useEffect, useState } from 'react'
import './App.module.css'
import { ContactList } from '../ContactList/ContactList'
import { SearchBox } from '../SearchBox/SearchBox'
import { ContactForm } from '../ContactForm/ContactForm'

function App() {
  const [search, setSearch] = useState('')
  const [contacts, setContacts] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  )

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);



  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlerButton = (event) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== event.target.id));
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts}></ContactForm>
      <SearchBox setSearch={setSearch}></SearchBox>
      <ContactList data={filteredContacts} handlerButton={handlerButton}></ContactList>
    </>
  )
}

export default App

