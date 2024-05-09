import { createSlice } from '@reduxjs/toolkit';

const filterContactsState = {
  filter: '',
};

const filterContacts = createSlice({
  name: 'filter',
  initialState: filterContactsState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterContacts.actions;
export const filterContactsReducer = filterContacts.reducer;
