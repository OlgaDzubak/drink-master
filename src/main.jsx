import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './GlobalStyled.js';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store.js';
import { Global } from '@emotion/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/drinkMaster-Team-1">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Global styles={GlobalStyles} />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>,
);
