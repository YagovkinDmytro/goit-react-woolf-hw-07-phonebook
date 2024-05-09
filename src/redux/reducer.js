import { filterContactsReducer } from './filterContacts/slice';
import { contactsListReducer } from './contacts/slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsListReducer);

export const rootReducer = {
  contacts: persistedReducer,
  filter: filterContactsReducer,
};
