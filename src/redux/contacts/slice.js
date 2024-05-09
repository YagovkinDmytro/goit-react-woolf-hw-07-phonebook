import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsList = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, { payload }) => {
      return { ...state, contacts: [...state.contacts, payload] };
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(elem => elem.id !== payload);
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsList.actions;
export const contactsListReducer = contactsList.reducer;
