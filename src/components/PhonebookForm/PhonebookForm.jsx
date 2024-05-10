import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const createNewContact = (name, phone) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone }));
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    createNewContact(name, number);
    resetForm();
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <div>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="form-container-name">
            <label htmlFor="name" className="form-lable">
              Name
            </label>
            <input
              value={name}
              onChange={evt => handleChange(evt)}
              className="form-imput"
              type="text"
              id="name"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="form-container-number">
            <label htmlFor="number" className="form-lable">
              Number
            </label>
            <input
              value={number}
              onChange={evt => handleChange(evt)}
              className="form-imput"
              type="tel"
              id="number"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button className="form-button submit" type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

export default PhonebookForm;
