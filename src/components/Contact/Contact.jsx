import css from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';

const Contact = ({ contactData: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactWrapper}>
      <div>
        <p>
          <FontAwesomeIcon className={css.icon} icon={faUser} />
          {name}
        </p>
        <p>
          <FontAwesomeIcon className={css.icon} icon={faPhone} />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
