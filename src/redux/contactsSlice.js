import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsInitialState = {
  items: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.filter(elem => elem.id !== payload);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },

  // addContact: (state, { payload }) => {
  //   return { ...state, contacts: [...state.contacts, payload] };
  // },
  // deleteContact: (state, { payload }) => {
  //   state.contacts = state.contacts.filter(elem => elem.id !== payload);
  // },
});

// export const { addContact, deleteContact, filterContacts } =
//   contactsList.actions;
export const contactsSliceReducer = contactsSlice.reducer;
