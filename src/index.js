import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebase = require('firebase');
const config = require('./config.js');
require('firebase/firestore');

  // Your web app's Firebase configuration
  firebase.initializeApp({
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
    appId: config.firebase.appId,
    measurementId: config.firebase.measurementId
  });
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

