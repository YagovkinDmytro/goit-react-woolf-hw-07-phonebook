import PhonebookForm from './PhonebookForm/PhonebookForm';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';
import './PhonebookForm/phonebookForm.css';
import './Section/section.css';
import './ContactsList/contactsList.css';
import './FilterContacts/filterContacts.css';

export const App = () => {
  return (
    <div className="container">
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <FilterContacts />
        <ContactsList />
      </Section>
    </div>
  );
};
