/* eslint-disable import/order */
import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './stores';
import { Spinner } from './components/Spinner';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
