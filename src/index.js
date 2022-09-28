import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnVVt5M342EtEoQxuvDhRw52A3jV1jRAY",
  authDomain: "giko-71362.firebaseapp.com",
  projectId: "giko-71362",
  storageBucket: "giko-71362.appspot.com",
  messagingSenderId: "191434118078",
  appId: "1:191434118078:web:b7eefd2ef11260e8d69fef"
};

// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
