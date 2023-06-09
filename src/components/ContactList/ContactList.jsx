import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { ContactsList } from './ContactList.styled';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
