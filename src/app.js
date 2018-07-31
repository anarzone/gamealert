import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import firebase from './firebase/firebase';
import configStore from './store/configStore';
import { startSetTopics } from './actions/questions';
import 'normalize.css/normalize.css';
import 'tachyons';
import './styles/styles.scss';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetTopics()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
}).catch((err) => {
  console.log(err);
});
