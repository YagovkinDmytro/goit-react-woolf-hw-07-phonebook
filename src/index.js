import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import './index.css';
import './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
