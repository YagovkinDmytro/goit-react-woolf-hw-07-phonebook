import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import {
  selectContacts,
  selectError,
  selectFilterContacts,
  selectIsloading,
} from '../../redux/selectors';
import { useEffect } from 'react';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const filterContactsArr = useSelector(selectFilterContacts);
  console.log(contacts);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
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
          filterContactsArr.map(({ id, name, phone }) => (
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
