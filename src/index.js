import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import dotenv from 'dotenv/config'
let {DEBUG} = process.env
let HOST_URL = DEBUG?"http://127.0.0.1:8000":"https://justdjango-chat.herokuapp.com"
let SOCKET_URL = DEBUG?"ws://127.0.0.1:8000":"wss://justdjango-chat.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();