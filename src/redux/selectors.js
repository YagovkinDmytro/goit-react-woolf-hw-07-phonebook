import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsloading = state => state.contacts.isloading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filterValue.toLowerCase())
    );
  }
);
