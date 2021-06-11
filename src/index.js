import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';




axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'auth-token': localStorage.getItem('auth-token')
};

axios.defaults.baseURL="http://527109175856.ngrok.io"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
