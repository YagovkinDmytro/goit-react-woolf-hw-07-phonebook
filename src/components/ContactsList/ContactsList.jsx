import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsloading,
} from '../../redux/selectors';
import { useEffect } from 'react';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
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

  return (
    <>
      {isLoading && <p>Request in progress...</p>}
      {error && <h1>{error}</h1>}
      <ul>
        {contacts && contacts.length > 0 ? (
          setFilterContacts().map(({ id, name, phone }) => (
            <li className="contact-list-item" key={id}>
              {name}: {phone}
              <button
                className="contact-button delete"
                type="button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Contact list is empty, please add a new contact</p>
        )}
      </ul>
    </>
  );
};

export default ContactsList;
