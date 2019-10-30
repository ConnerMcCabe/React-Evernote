import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

  // Your web app's Firebase configuration

  firebase.initializeApp({
    apiKey: "AIzaSyD9PthWLbQB2iJ7vTtwboags5w7R8lfmiw",
    authDomain: "evernote-clone-36172.firebaseapp.com",
    databaseURL: "https://evernote-clone-36172.firebaseio.com",
    projectId: "evernote-clone-36172",
    storageBucket: "evernote-clone-36172.appspot.com",
    messagingSenderId: "911177894934",
    appId: "1:911177894934:web:7379ba14677bf856eab937",
    measurementId: "G-7968KJBVBE"
  });
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
