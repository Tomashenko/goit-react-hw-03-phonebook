import PropTypes from 'prop-types';
import { ContactListBtn, ContactListItem } from './СontactList.styled.jsx';

const ContactList = ({contacts, onDeletecontact}) => (
    <ul>
        {contacts.map(({id, name, number}) => (
            <ContactListItem key={id}
               >{name}: {number}
            <ContactListBtn onClick={() => onDeletecontact(id)}>Delete</ContactListBtn>
            </ContactListItem>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  
export default ContactList;

