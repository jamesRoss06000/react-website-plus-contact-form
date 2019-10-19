import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Below we import the files for React MDL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAY7eBnMt8rx1N_Jh_8LUGN32-AqXIGEGg",
  authDomain: "react-website-afe39.firebaseapp.com",
  databaseURL: "https://react-website-afe39.firebaseio.com",
  projectId: "react-website-afe39",
  storageBucket: "react-website-afe39.appspot.com",
  messagingSenderId: "476724951106",
  appId: "1:476724951106:web:36614d88723afae86215db",
  measurementId: "G-FW123H0Q4P"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
