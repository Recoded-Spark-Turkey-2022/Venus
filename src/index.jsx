import React, {Suspense}from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import './i18next'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
