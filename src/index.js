import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const config = {  
    apiKey: "AIzaSyC9p_u8nz-9JMEiVaJs3M64wWrh2iAj_BA",
    authDomain: "day3-f81f8.firebaseapp.com",
    databaseURL: "https://day3-f81f8.firebaseio.com",
    projectId: "day3-f81f8",
    storageBucket: "day3-f81f8.appspot.com",
    messagingSenderId: "276226891700"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
