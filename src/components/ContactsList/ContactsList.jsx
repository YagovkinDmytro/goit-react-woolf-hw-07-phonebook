import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import {
  getContacts,
  getError,
  getFilter,
  getIsloading,
} from '../../redux/selectors';
import { useEffect } from 'react';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsloading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const setFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(error);

  return (
    <>
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <h1>{error}</h1>}
      <ul>
        {contacts &&
          contacts.length > 0 &&
          setFilterContacts().map(({ id, name, number }) => (
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
    </>
  );
};

export default ContactsList;
