import { filterContactsSliceReducer } from './filterSlice';
import { contactsSliceReducer } from './contactsSlice';

export const rootReducer = {
  contacts: contactsSliceReducer,
  filter: filterContactsSliceReducer,
};
