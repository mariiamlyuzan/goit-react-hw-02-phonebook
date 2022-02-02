import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={s.listContact}>
        <p className={s.nameContact}>{name}:</p>
        <span className={s.numberContact}>{number}</span>
        <button
          type="button"
          className={s.buttonDelete}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
