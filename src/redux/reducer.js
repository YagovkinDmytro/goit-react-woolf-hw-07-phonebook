import { filterContactsSliceReducer } from './filterSlice';
import { contactsSliceReducer } from './contactsSlice';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsListReducer);

export const rootReducer = {
  contacts: contactsSliceReducer,
  filter: filterContactsSliceReducer,
};
