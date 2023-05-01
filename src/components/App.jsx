import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
 import { contactCreate, contactRemove } from 'store/contacts/slice.js';
import { filterChange } from 'store/filter/actions.js';
// import { contactCreate} from 'store/contacts/actions.js';
// import { filterChange } from 'store/filter/actions.js';


export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) || []
  // );
  //  const [filter, setFilter] = useState('');

  const { contacts, filter } = useSelector(state => state.contacts);

  // console.log('state', filter);
  // console.log('state', contacts);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const createContact = contact => {
    if (
      contacts.some(
        el => el.name === contact.name && el.number === contact.number
      )
    ) {
      alert(`${contact.name} is already in contacts`);
    } else {
      // setContacts(prev => [...prev, contact]);

      // dispatch({
      //   type: 'createContact',
      //   payload: {
      //     name: `${contact.name}`,
      //     number: `${contact.number}`,
      //   },
      // });
      dispatch(contactCreate(contact));
    }
  };


  // ------------перенесла ContactList.jsx
  const removeContact = contactId => {
    // setContacts(contacts.filter(contact => contact.id !== contactId));

    // dispatch({
    //   type: 'removeContact',
    //   payload: contacts.filter(contact => contact.id !== contactId),
    // });
      dispatch(contactRemove(contacts.filter(contact => contact.id !== contactId)))
  };

// ------ перенесла в Filter.jsx----
  const changeFilter = filter => {
    // setFilter(filter);

    // dispatch({ type: 'changeFilter', payload: filter });

    dispatch(filterChange(filter))
  };



  const filteredContacts = (filter) => {
    console.log('filter', filter)
    if (filter) {
     
      const visibleFriends = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );

      return visibleFriends;
    } else {
      return contacts;
    }
  };

  return (
    <div>
      <h2>Phone book</h2>
      <ContactForm onSubmit={createContact} />

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter filter={filter} 
         onChange={changeFilter} 
        />
      )}
      {contacts.length > 0 ? (
        <ContactList 
       contacts={filteredContacts()} 
         onDelete={removeContact} 
        />
      ) : (
        <p className="title">No contacts</p>
      )}
    </div>
  );
};
