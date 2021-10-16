import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/configureStore';
import './styles/_fonts.scss';
import './styles/_main.scss';
import './styles/_login.scss';
import './styles/_mainlogged.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
