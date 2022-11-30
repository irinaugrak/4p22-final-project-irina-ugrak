import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='4p22-final-project-irina-ugrak'>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);


