import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider}  from 'react-redux';
import store from './redux/store';

import { SnackbarProvider, enqueueSnackbar } from 'notistack';

ReactDOM.render(
    <Provider store={store}>
      <SnackbarProvider >
      
    <App />
    </SnackbarProvider >
    </Provider>,
  document.getElementById('root')
);