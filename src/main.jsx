import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store.js';
import { Global } from '@emotion/react';
import App from './App.jsx';
import GlobalContextProvider from "./context/GlobalContext";
import GlobalStyles from './GlobalStyled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="https://olgadzubak.github.io/drink-master_frontend">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalContextProvider>
            <Global styles={GlobalStyles}/>
            <App />
          </GlobalContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
