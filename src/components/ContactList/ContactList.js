import style from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={style.li} key={contact.id}>
          <span className={style.spanName}>{contact.name}: </span>
          <span className={style.spanNumber}>{contact.number} </span>
          <button
            className={style.btnDelete}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
