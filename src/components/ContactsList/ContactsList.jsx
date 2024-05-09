import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/slice';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactsList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const setFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {setFilterContacts().map(({ id, name, number }) => (
        <li className="contact-list-item" key={id}>
          {name}: {number}
          <button
            className="contact-button delete"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
