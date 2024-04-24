import { Contact } from '../index.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const selectContacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const filteredValues = selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {filteredValues.map(contact => (
        <li key={contact.id}>
          <Contact contactData={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
